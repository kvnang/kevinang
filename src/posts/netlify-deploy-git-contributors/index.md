---
title: How a git contributor can deploy on Netlify for free
date: 2022-10-08
status: published
---

Recently, in around May 2022, [Netlify](https://www.netlify.com) introduced [pricing changes](https://www.netlify.com/blog/changes-to-our-recent-pricing-update/) which upset a large portion of its community, especially the non-enterprise-but-paying ones. Now, if someone who is not part of the Netlify's paying team member makes a commit to a Netlify project, it won't auto deploy anymore. **A paying team member can either manually approve the deploy, or splash out a whopping $19 / git contributor / per month for automatic approval.**

This is especially inconvenient for small teams who have come-and-go contributors to a private project.

I love Netlify and do respect their decision to change the pricing for such an excellent, (mostly) delightful services they offer. However, I (as a paying team member) needed to have a non-team member contribute temporarily to a project on Netlify, and I wish we wouldn't have to fork out $19 per month for this.

So I found a workaround.

## Using build hooks

Netlify has a feature called [build hooks](https://docs.netlify.com/configure-builds/build-hooks/). A build hook gives you an endpoint / URL, to which you can send a POST request, and in turn it will trigger a build on a specific branch based on the latest commit.

The catch here is that it is only tied to a specific branch. So, I had to set up a new branch for the contributor to which he could commit, and it should give him a preview URL every time a change is pushed..

Let's set up a branch `develop`. But, if this branch never deployed to Netlify, I wouldn't have access to the build hook. So, I need to at least deploy it once myself. To do this, you may need to turn on the automatic branch deploy, and turn it off once you generate the build hook for this. Your build hook should look something like `https://api.netlify.com/build_hooks/00000000000000000000000`.

## Setting up GitHub Actions

With the build hook set and automatic branch deploy turned off, we can go set up the GitHub action. Go to your project folder and create a workflow file:

```yaml
## .github/workflows/deploy.yaml

# Trigger Netlify build for non-team members
name: netlify-build

on:
  push:
    branches:
      - develop

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Trigger Netlify Build on develop branch
        ## Add trigger_title param to override the default deploy title with the commit message
        run: |
          curl -X POST -d '{}' --data-urlencode "trigger_title=${{ github.event.head_commit.message }}" https://api.netlify.com/build_hooks/00000000000000000000000
```

_P.S. Feel free to make the build hook URL a GitHub Actions secret for increased security._

Once done, a non-team member should be able to push changes to the `develop` branch, and enjoy automatic deploy on Netlify, for free and without the need for a team member's approval for deploy!
