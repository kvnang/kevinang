// @ts-expect-error satori/wasm is not typed
import satori, { init } from "satori/wasm";
// @ts-expect-error yoga-wasm-web is not typed
import initYoga from "yoga-wasm-web";
import camelCase from "just-camel-case";
import { Parser } from "htmlparser2";
import { DomHandler } from "domhandler";
import { Resvg, initWasm } from "@resvg/resvg-wasm";
import { loadGoogleFont } from "./font";
import { ReactElementLikeProps, TransformNode } from "./types";

// @ts-expect-error .wasm files are not typed
import yogaWasm from "../assets/wasm/yoga.wasm";
// @ts-expect-error .wasm files are not typed
import resvgWasm from "../assets/wasm/index_bg.wasm";

// Needed to do this, as there's conflict between 'dom' and 'webworker' libs in tsconfig.json
declare global {
  namespace WebAssembly {
    type Module = any;
  }
}

/**
 * Convert the DOM tree into a React element
 */
const transformNode: TransformNode = (node) => {
  if (
    node.type === "comment" ||
    node.type === "directive" ||
    node.type === "cdata" ||
    node.type === "root"
  ) {
    return;
  }

  if (node.type === "text") {
    return node.data;
  }

  const props: ReactElementLikeProps = {};

  const children = "children" in node ? node.children : null;
  const attribs = "attribs" in node ? node.attribs : null;

  if (children) {
    props["children"] = children.map(transformNode);
  }

  if (attribs) {
    for (const [key, value] of Object.entries(attribs)) {
      if (key === "style") {
        const cleanStyle = value.replace(/\n/g, "").replace(/\s\s+/g, " ");

        props["style"] = cleanStyle
          .split(";")
          .reduce<Record<string, any>>((acc, cur) => {
            const [k, v] = cur.split(":");
            if (k && v) {
              const camelCaseKey = camelCase(k.trim());
              acc[camelCaseKey] = v.trim();
            }
            return acc;
          }, {});
      } else {
        props[key] = value;
      }
    }
  }

  return {
    type: node.name,
    props,
  };
};

export const og = async ({ url }: { url: string }) => {
  const params = new URLSearchParams(new URL(url).search);
  const title = params.get("title");

  const bitterFont = await loadGoogleFont({ family: "Bitter", weight: 600 });

  // Init resvg wasm
  try {
    await initWasm(resvgWasm as WebAssembly.Module);
  } catch (err) {
    // console.error(err);
  }

  // Init yoga wasm
  try {
    await initYoga(yogaWasm as WebAssembly.Module).then(async (yoga: any) => {
      await init(yoga);
    });
  } catch (err) {
    console.error(err);
  }

  const html = `
  <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; width: 100vw; font-family: sans-serif; background: #160f29">
		<div style="display: flex; width: 100vw; padding: 40px; color: white;">
    	<h1 style="font-size: 60px; font-weight: 600; margin: 0; font-family: 'Bitter', font-weight: 500">${title}</h1>
  	</div>
  </div>
  `;

  // remove whitespace from html
  const cleanHtml = html.replace(/<!--(.*?)-->|\s\B/gm, " ").trim();

  // parse html into a DOM tree
  const handler = new DomHandler();
  const parser = new Parser(handler);
  parser.parseComplete(cleanHtml);

  // convert DOM tree into a React element-like object
  const tree = handler.dom.map((node) => {
    const transformed = transformNode(node);
    return transformed;
  });

  // render the React element-like object into an SVG
  // here we assume that there's only one parent element...
  const svg = await satori(tree[0], {
    width: 1200,
    height: 600,
    fonts: [
      {
        name: "Bitter",
        data: await bitterFont,
        weight: 500,
        style: "normal",
      },
      // {
      //   name: "SF Pro Text",
      //   data: await sfProFont,
      //   weight: 400,
      //   style: "normal",
      // },
    ],
  });

  // convert the SVG into a PNG
  const opts = {
    background: "rgba(238, 235, 230, .9)",
    fitTo: {
      mode: "width" as const,
      value: 1200,
    },
    font: {
      loadSystemFonts: false, // It will be faster to disable loading system fonts.
    },
  };
  const resvg = new Resvg(svg, opts);
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  return new Response(pngBuffer, {
    headers: {
      "Content-Type": "image/png",
    },
  });
};
