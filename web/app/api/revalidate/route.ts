import { type NextRequest } from "next/server";
import { revalidateTag } from "next/cache";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag");

  if (!tag) {
    return Response.json(
      { reavlidated: false, tag, error: "No tag provided", now: Date.now() },
      { status: 400 }
    );
  }

  revalidateTag(tag);

  return Response.json({
    revalidated: true,
    tag,
    error: null,
    now: Date.now(),
  });
}
