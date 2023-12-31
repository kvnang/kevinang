export const runtime = "edge";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const queryString = new URL(request.url).searchParams;
  const download = queryString.get("download");

  const pdf = await fetch(
    `https://chrome.browserless.io/pdf?token=${process.env.BROWSERLESS_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
      body: JSON.stringify({
        // setExtraHTTPHeaders: {
        //   "X-Applications-Auth": process.env.BROWSERLESS_API_KEY,
        // },
        url: new URL(`/resume`, "https://www.kevinang.com").toString(),
        options: {
          displayHeaderFooter: true,
          printBackground: true,
          headerTemplate: `<div style="margin: 0 0.67cm; width: 100%;">
          <div style="float: left; font-size: 6pt;"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 180' class='w-12'%3E%3Cpath d='m76.52 57.48 38.82-46a29.15 29.15 0 0 1 21.73-9.62h.87V0H92.25v1.78h1.92c5.51 0 8.1 5 4.74 9.47L45.2 78V14.38A12.75 12.75 0 0 1 58 2h2.51V0H0v2h2.57a12.74 12.74 0 0 1 12.74 12.42v110.39a12.76 12.76 0 0 1-12.76 12.51H0v2h9.86Z' fill='%23FFBC42'%3E%3C/path%3E%3Cpath d='M199.77 171c-24.58-1.25-42.8-14-65.34-43.63l-50.76-63-18 21.9 25.43 31.17H40l-3.87 4.7h58.8l14.49 17.78c30.92 38.59 60 48.67 90.58 33Z' fill='%23FFD890'%3E%3C/path%3E%3C/svg%3E" width="24" height="24" /></div> 
          <div style="float: right; font-size: 6pt; text-align: right; font-family: monospace;">Kevin Ang</div>
      </div>`,
          format: "A4",
          margin: {
            left: "0cm",
            top: "2cm",
            right: "0cm",
            bottom: "2cm",
          },
        },
        gotoOptions: {
          waitUntil: "networkidle0",
        },
        safeMode: true,
        addStyleTag: [
          {
            content:
              "body { height: 100vh; } main { padding: 0 32px; } header, footer { display: none; } [data-resume-wrapper] { grid-template-columns: repeat(1, minmax(0, 1fr)) !important; } [data-resume-nav] { display: none; } [data-resume-body] > * { break-inside: avoid } ",
          },
        ],
      }),
    }
  );

  const pdfRes = await pdf.blob();

  if (download) {
    return new Response(pdfRes, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="application.pdf"`,
      },
    });
  }

  return new Response(pdfRes, {
    headers: {
      "Content-Type": "application/pdf",
    },
  });
}
