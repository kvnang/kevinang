import { getOpengraphImage } from "@/lib/opengraph";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Hi, I’m Kevin Ang.";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return getOpengraphImage({
    title: "Hi, I’m Kevin Ang.",
    description:
      "I’m a senior web engineer at Longbeard, a husband & father, music generalist, and a coffee enthusiast.",
  });
}
