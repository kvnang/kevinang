import { jsPDF } from "jspdf";

export const runtime = "edge";

export function GET(request: Request) {
  const doc = new jsPDF({
    orientation: "p",
    format: "a4",
    unit: "pt",
  });

  const pageWidth = doc.internal.pageSize.width;
  const ppi = 3;

  const FONT_SIZES = {
    base: 10,
    h1: 20,
    h2: 16,
  };

  const LINE_HEIGHT = 1.5;
  const START = { x: 48, y: 48 };
  let currentY = START.y;

  const MAX_WIDTH = Math.floor(pageWidth - START.x * 2);

  const docText = (
    text: string,
    x: number,
    y: number,
    { fontSize: _fontSize }: { fontSize?: keyof typeof FONT_SIZES } = {}
  ) => {
    const fontSize = _fontSize || "base";

    doc.setFont("helvetica", fontSize === "base" ? "normal" : "bold");
    doc.setFontSize(FONT_SIZES[fontSize]);
    doc.setLineHeightFactor(LINE_HEIGHT);
    doc.text(text, x, y, {
      baseline: "top",
      maxWidth: MAX_WIDTH,
    });
    const textWidth = doc.getTextWidth(text);
    const lines = Math.ceil(textWidth / MAX_WIDTH);
    const textHeight = FONT_SIZES[fontSize] * LINE_HEIGHT * lines;
    currentY += textHeight;

    return { textDimensions: { w: textWidth, h: textHeight } };
  };

  // Header
  docText("Kevin Ang", START.x, currentY, { fontSize: "h1" });
  docText("Senior full-stack web engineer at Longbeard.", START.x, currentY);
  currentY += 8;

  doc.addImage(
    `iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAACD0lEQVRIDc2UTUtUURjHpxdJBSXbFEIwi1427iZxJQwRQoj0GfoILmtdH6FWLaPQTX4AQ8GNUrOQFi3CdmmEvUiLaiH6+znnGQ7X7sxcNOgPP88zz/k/zzn33nOs1f6xzvTo73wTpuEWNEC14C2swSocQGVdp+I1WNwNPTegkpq4f4KNP8MjmIPxhLE55/TobUJfquP6ChYuwUUok3N69FpTh55axmHBKyh+oyFyI5BLj15rrO2qGWY1foFLmfMO8SJ8go/wAu5CSK811tqjVAvMaHqQOWz+IeV/M35P8TvGfJGHKW+PUm0z4wI3M4c7N/cMroLH9QmY80lC1pizR6n2mdE0kBxDjL4Wd27zkIv4JL6u+CbWWGuPjs52onbwK/0eTuN5xj9g/nLKOYyCizp3DlTURI+jZHEBd6Qm2sPR+V4n9jjeB3d+G+7BFWjBD1BREz3a2cLfp/z2MR9neT+kH9S8r2UnxTafg5A1euxRKnenyfd+IXO5iB/U3b2H55A312uNtfYolZdmEzTO/8U1Qs7XVZRea6wtXs6itzabzHuM9WOzxxN69LqAtX3Jy2LBBgx2qXBOj15r+tYYzi2w0IsWR5GwI3NxCfVaU0keu/i38JLYOxEyNucG9MQRJaymKeyxiLsdSMTOvQN6TqRJqr+Bu11JGJtz7lTUoMsu2FiMzZ2qrtHtTcL4/9AhSTyOcxBme6YAAAAASUVORK5CYII=`,
    START.x,
    currentY - 5,
    12,
    12
  );
  docText("Canada", START.x + 12 + 4, currentY);

  currentY += 24;

  docText("About", START.x, currentY, { fontSize: "h2" });
  currentY += 4;

  docText(
    `Indonesian by birth, I currently reside in Canada. I am well-versed in the humanities and philology, but a self-taught web engineer by trade. In web development, I enjoy taking risks and assuming responsibilities for the sake of faster iteration and user satisfaction. Fast development cycles are key to a good end product.`,
    START.x,
    currentY
  );

  currentY += 24;

  docText("Languages", START.x, currentY, { fontSize: "h2" });
  currentY += 4;

  doc.save("a4.pdf");

  // Return the PDF file to the browser

  const output = doc.output("arraybuffer");

  const headers = new Headers();
  headers.set("Content-Type", " application/pdf");

  return new Response(output, { headers });
}
