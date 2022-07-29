import { n as noop, b as safe_not_equal, d as now, l as loop, c as create_ssr_component, f as subscribe, e as escape, a as add_attribute, v as validate_component } from "../../_app/immutable/chunks/index-02beba75.js";
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map((_, i) => tick_spring(ctx, last_value[i], current_value[i], target_value[i]));
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = writable(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = value;
  let target_value = value;
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = now();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = now();
      cancel_task = false;
      task = loop((now2) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: (now2 - last_time) * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now2;
        last_value = value;
        store.set(value = next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token)
          fulfil();
      });
    });
  }
  const spring2 = {
    set,
    update: (fn, opts2) => set(fn(target_value, value), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}
const TextRoll_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".counter.svelte-1ktim2v.svelte-1ktim2v{display:inline-flex;vertical-align:baseline;height:100%;max-width:100%}.counter-viewport.svelte-1ktim2v.svelte-1ktim2v{width:9em;max-width:100%;height:1.25em;display:block;overflow:hidden;text-align:left;position:relative}.counter-viewport.svelte-1ktim2v strong.svelte-1ktim2v{position:absolute;display:flex;width:100%;height:100%;align-items:center;justify-content:flex-start;white-space:nowrap;color:var(--color-accent)}.counter-digits.svelte-1ktim2v.svelte-1ktim2v{position:absolute;display:block;width:100%;height:100%}",
  map: null
};
function modulo(n, m) {
  return (n % m + m) % m;
}
const TextRoll = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let offset;
  let $displayed_count, $$unsubscribe_displayed_count;
  let { pause } = $$props;
  let count = 0;
  const text = ["full-stack web dev", "father of two", "coffee enthusiast"];
  const displayed_count = spring();
  $$unsubscribe_displayed_count = subscribe(displayed_count, (value) => $displayed_count = value);
  function nextSlide() {
    return $displayed_count < text.length - 1 ? count += 1 : count = 0;
  }
  let timer;
  function maybePlaySlider(pause2) {
    if (!pause2) {
      timer = setInterval(nextSlide, 5e3);
    } else {
      clearInterval(timer);
    }
  }
  if ($$props.pause === void 0 && $$bindings.pause && pause !== void 0)
    $$bindings.pause(pause);
  $$result.css.add(css$5);
  {
    displayed_count.set(count);
  }
  offset = modulo($displayed_count, 1);
  {
    maybePlaySlider(pause);
  }
  $$unsubscribe_displayed_count();
  return `<span class="${"counter svelte-1ktim2v"}"><span class="${"counter-viewport svelte-1ktim2v"}"><span class="${"counter-digits svelte-1ktim2v"}" style="${"transform: translate(0, -" + escape(100 * offset, true) + "%)"}"><strong style="${"top: 100%; opacity: " + escape(offset, true) + ";"}" aria-hidden="${"true"}" class="${"svelte-1ktim2v"}">${escape(text[Math.floor($displayed_count + 1)] || text[1])}.</strong>
			<strong style="${"opacity: " + escape(1 - offset, true)}" class="${"svelte-1ktim2v"}">${escape(text[Math.floor($displayed_count)] || text[0])}.</strong></span></span>
</span>`;
});
const img = "/_app/immutable/assets/hero-f65e8460.jpg";
const Hero_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".wrapper.svelte-1vqf49w.svelte-1vqf49w{position:relative}.container.svelte-1vqf49w.svelte-1vqf49w{display:flex;flex-direction:column}h1.svelte-1vqf49w.svelte-1vqf49w{display:inline-flex;flex-flow:wrap}h1.svelte-1vqf49w span.svelte-1vqf49w{display:inline-block}.hero.svelte-1vqf49w.svelte-1vqf49w{opacity:0.35;position:absolute;width:55%;right:0;top:-6rem;transform:translateX(5%);z-index:-1}@media(min-width: 768px){.hero.svelte-1vqf49w.svelte-1vqf49w{width:50%;top:-8rem}}@media(min-width: 1025px){.hero.svelte-1vqf49w.svelte-1vqf49w{width:45%;top:-10rem}}@media(min-width: 1440px){.hero.svelte-1vqf49w.svelte-1vqf49w{top:-15rem;width:45%}}@media(min-width: 1750px){.hero.svelte-1vqf49w.svelte-1vqf49w{width:40%}}.hero.svelte-1vqf49w img.svelte-1vqf49w{width:100%;height:auto}.desc.svelte-1vqf49w.svelte-1vqf49w{max-inline-size:60ch}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pause = false;
  $$result.css.add(css$4);
  return `<section class="${"wrapper section-m-t section-m-b--lg svelte-1vqf49w"}"><div class="${"container svelte-1vqf49w"}"><div class="${"hero svelte-1vqf49w"}"><img${add_attribute("src", img, 0)} alt="${"Kevin Ang"}" width="${"700"}" height="${"962"}" class="${"svelte-1vqf49w"}"></div>
		<h1 class="${"h5 svelte-1vqf49w"}" style="${"margin-bottom: 1.5rem"}">\u{1F44B}\xA0\xA0Kevin&#39;s here!</h1>
		<h1 class="${"svelte-1vqf49w"}"><span class="${"svelte-1vqf49w"}">I&#39;m a</span>\xA0${validate_component(TextRoll, "TextRoll").$$render($$result, { pause }, {}, {})}</h1>
		<div class="${"desc svelte-1vqf49w"}"><p>I&#39;m a full-stack dev from <span role="${"img"}" aria-label="${"Indonesia"}">\u{1F1EE}\u{1F1E9}</span>, currently
				working at
				<a href="${"https://www.longbeard.com"}" target="${"_blank"}" rel="${"noopener noreferrer"}">Longbeard</a>,
				a web design agency serving clients across the Americas and Europe. I&#39;ve been here since
				2019 and loving it.
			</p>
			<p>I love experimenting with new web technologies, but anything JS is my current forte.</p>
			<p>Spending quality time with my wife and kids makes me a happy man. \u{1F60A}</p></div></div>
</section>`;
});
const IntersectionObserver_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "div.svelte-1c44y5p{width:100%;height:100%}",
  map: null
};
const IntersectionObserver_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { once = false } = $$props;
  let { top = 0 } = $$props;
  let { bottom = 0 } = $$props;
  let { left = 0 } = $$props;
  let { right = 0 } = $$props;
  let { intersecting = false } = $$props;
  let container;
  if ($$props.once === void 0 && $$bindings.once && once !== void 0)
    $$bindings.once(once);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.bottom === void 0 && $$bindings.bottom && bottom !== void 0)
    $$bindings.bottom(bottom);
  if ($$props.left === void 0 && $$bindings.left && left !== void 0)
    $$bindings.left(left);
  if ($$props.right === void 0 && $$bindings.right && right !== void 0)
    $$bindings.right(right);
  if ($$props.intersecting === void 0 && $$bindings.intersecting && intersecting !== void 0)
    $$bindings.intersecting(intersecting);
  $$result.css.add(css$3);
  return `<div class="${"svelte-1c44y5p"}"${add_attribute("this", container, 0)}>${slots.default ? slots.default({ intersecting }) : ``}
</div>`;
});
const Cube_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".cube.svelte-1whco2c.svelte-1whco2c{position:absolute;top:calc(var(--top) * var(--cube-size) + var(--left) * var(--cube-size) / 3 + var(--right) * -42px);left:calc(var(--left) * var(--cube-size) + var(--right) * 44px)}.inner.svelte-1whco2c.svelte-1whco2c{width:var(--cube-size);height:var(--cube-size);transform-style:preserve-3d;transform:rotateX(240deg) rotateY(0deg) rotateZ(-210deg)}.side.svelte-1whco2c.svelte-1whco2c{width:100%;height:100%;top:0;left:0;position:absolute;border-radius:15%}.top.svelte-1whco2c.svelte-1whco2c{transform:translateZ(calc(var(--cube-size) * -1));background:var(--color-bg-tint-2)}.front.svelte-1whco2c.svelte-1whco2c{transform:rotateX(90deg);transform-origin:bottom;overflow:hidden;padding:10px;display:flex;align-items:center;justify-content:center}.front.svelte-1whco2c img.svelte-1whco2c{transform:scaleX(-1);height:100%;width:100%}.right.svelte-1whco2c.svelte-1whco2c{width:var(--cube-size);transform:translateZ(0) rotateY(90deg);transform-origin:left;background:var(--color-bg-tint)}.back.svelte-1whco2c.svelte-1whco2c{transform:translateY(-80%) rotateX(90deg);transform-origin:bottom;overflow:hidden;background-color:var(--color-bg)}",
  map: null
};
const Cube = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { bg } = $$props;
  let { color = "var(--color-bg)" } = $$props;
  let { title } = $$props;
  let { top } = $$props;
  let { left } = $$props;
  let { right = 0 } = $$props;
  let { delay: delay2 = 0 } = $$props;
  if ($$props.bg === void 0 && $$bindings.bg && bg !== void 0)
    $$bindings.bg(bg);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.left === void 0 && $$bindings.left && left !== void 0)
    $$bindings.left(left);
  if ($$props.right === void 0 && $$bindings.right && right !== void 0)
    $$bindings.right(right);
  if ($$props.delay === void 0 && $$bindings.delay && delay2 !== void 0)
    $$bindings.delay(delay2);
  $$result.css.add(css$2);
  return `<li class="${"cube svelte-1whco2c"}" style="${"--top:" + escape(top, true) + ";--right:" + escape(right, true) + ";--left:" + escape(left, true)}"><div class="${"inner svelte-1whco2c"}"><div class="${"side back svelte-1whco2c"}"></div>
		<div class="${"side top svelte-1whco2c"}"></div>
		<div class="${"side right svelte-1whco2c"}"></div>
		<div class="${"side front svelte-1whco2c"}" style="${"background-color: " + escape(color, true)}"><img${add_attribute("src", bg, 0)}${add_attribute("alt", title, 0)} width="${"67"}" height="${"67"}" class="${"svelte-1whco2c"}"></div></div>
</li>`;
});
const js = "/_app/immutable/assets/js-697ce78d.svg";
const node = "/_app/immutable/assets/node-c08e2ccd.svg";
const php = "/_app/immutable/assets/php-821cb3db.svg";
const typescript = "/_app/immutable/assets/typescript-bd412956.svg";
const react = "/_app/immutable/assets/react-ad6f4fa8.svg";
const svelte = "/_app/immutable/assets/svelte-87df40b8.svg";
const wordpress = "/_app/immutable/assets/wordpress-be6a997d.svg";
const gatsby = "/_app/immutable/assets/gatsby-f4a74fad.svg";
const nextjs = "/_app/immutable/assets/nextjs-c248c5a9.svg";
const mongodb = "/_app/immutable/assets/mongodb-4fcdf774.svg";
const github = "/_app/immutable/assets/github-4b5be516.svg";
const workers = "/_app/immutable/assets/workers-8d8e44e2.svg";
const express = "/_app/immutable/assets/express-ed52d8e9.svg";
const shopify = "/_app/immutable/assets/shopify-2a3f3ff3.svg";
const Stacks_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".container.svelte-ut4g7q.svelte-ut4g7q{display:flex;flex-direction:column;align-items:center}.stacks.svelte-ut4g7q.svelte-ut4g7q{position:relative;margin:15rem 0 8rem;left:calc(var(--cube-size) * -3)}.stacks.svelte-ut4g7q ul.svelte-ut4g7q{list-style:none;padding:0}",
  map: null
};
const delay = 4e3;
const Stacks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let intersecting = false;
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<section class="${"container section-m-t--lg section-m-b svelte-ut4g7q"}"><h2 class="${"h2"}" style="${"text-align: center"}">My favorite stacks \u{1F36A}</h2>
	<h3 class="${"h5"}">${intersecting ? `<span style="${"display:inline-block"}">And more ...</span>` : `\xA0`}</h3>
	<div class="${"stacks svelte-ut4g7q"}">${validate_component(IntersectionObserver_1, "IntersectionObserver").$$render(
      $$result,
      { top: 100, once: true, intersecting },
      {
        intersecting: ($$value) => {
          intersecting = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${intersecting ? `<ul class="${"svelte-ut4g7q"}">${validate_component(Cube, "Cube").$$render(
            $$result,
            {
              bg: shopify,
              color: "#fbf7ed",
              title: "Shopify",
              top: 0,
              left: -1,
              right: 0,
              delay
            },
            {},
            {}
          )}
					
					
					${validate_component(Cube, "Cube").$$render(
            $$result,
            {
              bg: wordpress,
              color: "#21759b",
              title: "WordPress",
              top: 0,
              left: 0
            },
            {},
            {}
          )}
					${validate_component(Cube, "Cube").$$render(
            $$result,
            {
              bg: workers,
              color: "#333333",
              title: "Cloudflare Workers",
              top: -1,
              left: 0,
              delay
            },
            {},
            {}
          )}
					${validate_component(Cube, "Cube").$$render(
            $$result,
            {
              bg: js,
              color: "#F7DF1E",
              title: "JavaScript",
              top: 0,
              left: 1,
              right: 1
            },
            {},
            {}
          )}
					${validate_component(Cube, "Cube").$$render(
            $$result,
            {
              bg: php,
              color: "#8993BE",
              title: "JavaScript",
              top: 0,
              left: 1
            },
            {},
            {}
          )}
					${validate_component(Cube, "Cube").$$render(
            $$result,
            {
              bg: js,
              color: "#F7DF1E",
              title: "JavaScript",
              top: 0,
              left: 2,
              right: 1
            },
            {},
            {}
          )}
					${validate_component(Cube, "Cube").$$render(
            $$result,
            {
              bg: node,
              color: "#fff",
              title: "Node.js",
              top: 0,
              left: 2
            },
            {},
            {}
          )}
					
					${validate_component(Cube, "Cube").$$render(
            $$result,
            {
              bg: typescript,
              color: "#3178c6",
              title: "Typescript",
              top: -1,
              left: 1
            },
            {},
            {}
          )}
					${validate_component(Cube, "Cube").$$render(
            $$result,
            {
              bg: js,
              color: "#F7DF1E",
              title: "JavaScript",
              top: -1,
              left: 2
            },
            {},
            {}
          )}
					${validate_component(Cube, "Cube").$$render(
            $$result,
            {
              bg: react,
              color: "#20232a",
              title: "JavaScript",
              top: -2,
              left: 2
            },
            {},
            {}
          )}
					${validate_component(Cube, "Cube").$$render(
            $$result,
            {
              bg: js,
              color: "#F7DF1E",
              title: "JavaScript",
              top: 0,
              left: 3,
              right: 2
            },
            {},
            {}
          )}
					${validate_component(Cube, "Cube").$$render(
            $$result,
            {
              bg: mongodb,
              color: "#061621",
              title: "JavaScript",
              top: 0,
              left: 3,
              right: 1
            },
            {},
            {}
          )}
					${validate_component(Cube, "Cube").$$render(
            $$result,
            {
              bg: gatsby,
              color: "#663399",
              title: "JavaScript",
              top: -1,
              left: 3,
              right: 1
            },
            {},
            {}
          )}
					${validate_component(Cube, "Cube").$$render(
            $$result,
            {
              bg: svelte,
              color: "#fff",
              title: "JavaScript",
              top: -2,
              left: 3,
              right: 1
            },
            {},
            {}
          )}
					${validate_component(Cube, "Cube").$$render(
            $$result,
            {
              bg: nextjs,
              color: "#000",
              title: "Next.js",
              top: 0,
              left: 4,
              right: 2
            },
            {},
            {}
          )}
					${validate_component(Cube, "Cube").$$render(
            $$result,
            {
              bg: github,
              color: "#333333",
              title: "Next.js",
              top: -1,
              left: 4,
              right: 2
            },
            {},
            {}
          )}
					${validate_component(Cube, "Cube").$$render(
            $$result,
            {
              bg: express,
              color: "#222",
              title: "Express.js",
              top: 0,
              left: 5,
              right: 2,
              delay
            },
            {},
            {}
          )}</ul>` : ``}`;
        }
      }
    )}</div>
</section>`;
  } while (!$$settled);
  return $$rendered;
});
const Contact_svelte_svelte_type_style_lang = "";
const css = {
  code: ".inner.svelte-1o3jqpu.svelte-1o3jqpu{display:flex;flex-flow:wrap}.inner.svelte-1o3jqpu .text.svelte-1o3jqpu{flex:0 0 100%;max-width:100%;margin-bottom:var(--section-spacing)}@media(min-width: 768px){.inner.svelte-1o3jqpu .text.svelte-1o3jqpu{flex:0 0 50%;max-width:50%}}@media(min-width: 1025px){.inner.svelte-1o3jqpu .text.svelte-1o3jqpu{flex:0 0 40%;max-width:40%}}.inner.svelte-1o3jqpu .form.svelte-1o3jqpu{flex:0 0 100%;max-width:100%}@media(min-width: 768px){.inner.svelte-1o3jqpu .form.svelte-1o3jqpu{flex:0 0 50%;max-width:50%}}@media(min-width: 1025px){.inner.svelte-1o3jqpu .form.svelte-1o3jqpu{flex:0 0 60%;max-width:60%}}.email.svelte-1o3jqpu.svelte-1o3jqpu{display:flex;align-items:center}.email.svelte-1o3jqpu svg.svelte-1o3jqpu{height:1.25rem;width:auto;margin-right:1rem}button[type=submit].svelte-1o3jqpu.svelte-1o3jqpu{color:var(--color-p);display:inline-flex;align-items:stretch;font-weight:700;transition:color var(--transition);border:1px solid currentColor;padding:0.75rem 1.5rem;border-radius:1.5rem}button[type=submit].svelte-1o3jqpu .button-icon.svelte-1o3jqpu{margin-left:1rem;width:1.25rem;position:relative;height:inherit}button[type=submit].svelte-1o3jqpu .button-icon svg.svelte-1o3jqpu{height:1.25rem;width:100%;position:absolute;top:50%;left:0;transform:translate(var(--translateX), -50%);transition:var(--transition)}button[type=submit].svelte-1o3jqpu .button-icon svg.svelte-1o3jqpu:first-of-type{opacity:1;color:var(--color-p);--translateX:0;transition-delay:0.25s}button[type=submit].svelte-1o3jqpu .button-icon svg.svelte-1o3jqpu:last-of-type{opacity:0;color:var(--color-accent);--translateX:-100%}button[type=submit].svelte-1o3jqpu.svelte-1o3jqpu:hover{color:var(--color-accent)}button[type=submit].svelte-1o3jqpu:hover .button-icon svg.svelte-1o3jqpu:first-of-type{opacity:0;--translateX:100%;transition-delay:0s}button[type=submit].svelte-1o3jqpu:hover .button-icon svg.svelte-1o3jqpu:last-of-type{opacity:1;--translateX:0;transition-delay:0.25s}",
  map: null
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="${"container section-m-b"}"><div class="${"inner svelte-1o3jqpu"}"><div class="${"text svelte-1o3jqpu"}"><h2 class="${"h1"}">Contact</h2>
			<p>Feel free to reach out to me!</p>
			<div class="${"email svelte-1o3jqpu"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" height="${"24px"}" viewBox="${"0 0 24 24"}" width="${"24px"}" fill="${"currentColor"}" class="${"svelte-1o3jqpu"}"><path d="${"M0 0h24v24H0z"}" fill="${"none"}"></path><path d="${"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}"></path></svg>
				<a href="${"mailto:ka@kevinang.com"}" target="${"_blank"}" rel="${"noopener noreferrer"}" class="${"h5"}">ka@kevinang.com</a></div></div>
		<div class="${"form svelte-1o3jqpu"}"><form class="${"new"}" action="${"/contact.json"}" method="${"POST"}"><div class="${"form-fields"}"><div class="${"form-field form-field--half"}"><label for="${"contactname"}"><input id="${"contactname"}" name="${"text"}" autocomplete="${"name"}">
							<span class="${"label"}">Name</span>
							<div class="${"underline"}"></div></label></div>
					<div class="${"form-field form-field--half"}"><label for="${"contactemail"}"><input id="${"contactemail"}" name="${"email"}" autocomplete="${"email"}">
							<span class="${"label"}">Email</span>
							<div class="${"underline"}"></div></label></div>
					<div class="${"form-field"}"><label for="${"contactmessage"}"><textarea id="${"contactmessage"}" name="${"message"}"></textarea>
							<span class="${"label"}">Message</span>
							<div class="${"underline"}"></div></label></div>
					<div class="${"form-field form-field--submit"}"><button type="${"submit"}" class="${"svelte-1o3jqpu"}"><span class="${"button-text"}">Send</span>
							<div class="${"button-icon svelte-1o3jqpu"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" height="${"24px"}" viewBox="${"0 0 24 24"}" width="${"24px"}" fill="${"currentcolor"}" class="${"svelte-1o3jqpu"}"><path d="${"M0 0h24v24H0z"}" fill="${"none"}"></path><path d="${"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"}"></path></svg>
								<svg xmlns="${"http://www.w3.org/2000/svg"}" height="${"24px"}" viewBox="${"0 0 24 24"}" width="${"24px"}" fill="${"currentcolor"}" class="${"svelte-1o3jqpu"}"><path d="${"M0 0h24v24H0z"}" fill="${"none"}"></path><path d="${"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"}"></path></svg></div></button></div></div></form></div></div>
</section>`;
});
const prerender = true;
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Home</title>`, ""}`, ""}

${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}
${validate_component(Stacks, "Stacks").$$render($$result, {}, {}, {})}

${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}`;
});
export {
  Routes as default,
  prerender
};
