import { getOpengraphImage } from "@/lib/opengraph";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Kevin Ang’s Résumé";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return getOpengraphImage({
    title: "Kevin Ang’s Résumé",
    description: "Browse my résumé or simply get a PDF copy.",
  });
}
