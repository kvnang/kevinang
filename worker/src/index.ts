/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { og } from "./og";

export interface Env {
  // Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
  // MY_KV_NAMESPACE: KVNamespace;
  //
  // Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
  // MY_DURABLE_OBJECT: DurableObjectNamespace;
  //
  // Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
  // MY_BUCKET: R2Bucket;
}

async function handleRequest(request: Request) {
  const url = new URL(request.url);
  const path = url.pathname;

  if (path === "/og") {
    return await og({ url: request.url });
  }

  let content = "";

  const contentType = request.headers.get("content-type") || "";

  if (contentType.includes("form")) {
    const formData = await request.formData();
    for (const entry of formData.entries()) {
      content += entry[0] + ": " + entry[1] + "\n";
    }
  }

  let send_request = new Request("https://api.mailchannels.net/tx/v1/send", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [
        { to: [{ email: "ka@kevinang.com", name: "Kevin Ang" }] },
      ],
      from: {
        email: "noreply@worker.kevinang.com",
        name: "KA Worker",
      },
      subject: "Contact form submission from kevinang.com",
      content: [
        {
          type: "text/plain",
          value: content,
        },
      ],
    }),
  });

  let respContent = "";
  // only send the mail on "POST", to avoid spiders, etc.
  if (request.method == "POST") {
    const resp = await fetch(send_request);
    const respText = await resp.text();

    respContent = resp.status + " " + resp.statusText + "\n\n" + respText;
  }

  const response = {
    message: respContent,
  };

  return new Response(JSON.stringify(response), {
    headers: { "content-type": "application/json" },
  });
}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    return handleRequest(request);
  },
};
