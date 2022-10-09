---
title: Building a simple post view counter with Cloudflare Workers
date: 2022-10-01
status: draft
---

# Building a simple post view counter with Cloudflare Workers

Let's say you have a WordPress blog, and you'd like to track the view count of a post. In theory, you could create a meta field associated with that post ID, say `view_count`, and increment that value everytime a request is made to the post.

While that sounds feasible, neither is it efficient nor scalable. This logic means executing an `UPDATE` operation to the database everytime a user visits the post. Imagine if this post were to become viral, raking up 100 visits per minute. Would the database be able to handle `UPDATE` operations in such scale? Probably not.

## Enters Cloudflare Workers

[Cloudflare Workers](https://workers.cloudflare.com/) gives you the ability to "deploy serverless code instantly across the globe." Essentially, you can now write a simple JavaScript code, deploy this to Cloudflare Workers, and have it run based on a certain trigger.

In addition, Cloudflare Workers comes with plenty of extras, one of them being a built-in integration with a Cloudflare KV (key-value) storage. A KV is like a database, but much simpler in that it stores only key-value data. If this database were to be displayed in JSON format, you can think of it as such:

```json
{
	"name": "pizza",
	"slices": "8",
	"toppings": "['mushroom', 'bacon', 'cheese']"
}
```

> You'll notice that key-value pairs mostly map `string` to `string` (though there are [other types](https://developers.cloudflare.com/workers/runtime-apis/kv/#parameters) that can be accepted as value).

So, the idea is to leverage the KV storage as our database which tracks post view counts, and thus shifting the heavy-lifting away from our (likely centralized) website's database to a global data store. For example, we will store data that looks like this:

```json
{
	"142": "2",
	"143": "8"
}
```

This means that a post with ID `142` has `2` views, etc.

And everytime a user views post #142, a request is made to update this store by incrementing the view count, such as:

```json
{
	"142": "3"
}
```

Given the simplicity and global availability of the KV storage, this setup can scale (almost) infinitely.

## What we need to do

To achieve this, we need the following:

1. Set up Cloudflare Workers + KV store
2. Write and deploy a Worker script
3. Add a little JS to the post frontend that requests the Worker to update a key-value pair based on post ID
4. Create a script to fetch the 10 most viewed posts based on the KV store data.

## 1. Set up Cloudflare Workers + KV store

First, open your terminal and initialize the project using Wrangler CLI:

```bash
npm i -g wrangler
wrangler init <YOUR_PROJECT_NAME>
```

You will be asked a series of questions. For this example, we will use **TypeScript** and **Fetch handler**.

Go to the newly created folder and install the project dependencies.

```bash
cd <YOUR_PROJECT_NAME>
npm install
```

Now [set up Workers KV](https://developers.cloudflare.com/workers/wrangler/workers-kv/) using Wrangler.

```bash
wrangler kv:namespace create <YOUR_NAMESPACE>
```

Here, you might be prompted to log in to Cloudflare via your browser. Follow the prompts, and you will receive a successful message like the following:

```bash
✨ Success!
Add the following to your configuration file in your kv_namespaces array:
{ binding = "<YOUR_BINDING>", id = "<YOUR_ID>" }
```

Then, simply open `wrangler.toml` on the project directory, and add the following:

```bash
kv_namespaces = [
    { binding = "<YOUR_BINDING>", id = "<YOUR_ID>" }
]
```

You are now all set with Cloudflare Workers + KV and should be ready to write some code!

## 2. Write and deploy your Worker script
