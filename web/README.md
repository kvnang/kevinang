# KevinAng.com

Welcome to the source code of [Kevin’s personal website](https://www.kevinang.com).

This site is built on Next.js + Radix / `shadcn/ui`. It’s a very simple website.

The only mildly interesting part is the [Résumé](https://www.kevinang.com/resume), where you can download a PDF version that is dynamically generated. It uses Puppeteer (via [browserless.io](https://browserless.io)) to take a screenshot of the page and returns it as a PDF. I don’t want to manage the info on two different media, and creating PDF using React is still a pain. Easy-peasy.
