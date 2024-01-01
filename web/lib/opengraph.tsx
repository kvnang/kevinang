import { OpengraphImage } from "@/components/opengraph";
import { ImageResponse } from "next/og";

export async function getOpengraphImage(
  props: Omit<React.ComponentProps<typeof OpengraphImage>, "imageData">
) {
  // Font
  const geistRegular = fetch(
    new URL("../public/fonts/Geist-Regular.otf", import.meta.url)
  ).then((res) => res.arrayBuffer());
  const geistSemiBold = fetch(
    new URL("../public/fonts/Geist-SemiBold.otf", import.meta.url)
  ).then((res) => res.arrayBuffer());
  const imageData = await fetch(
    new URL("../public/profile.jpg", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    <OpengraphImage {...props} imageData={imageData} />,
    // ImageResponse options
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Geist",
          data: await geistRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Geist",
          data: await geistSemiBold,
          style: "normal",
          weight: 600,
        },
      ],
    }
  );
}
