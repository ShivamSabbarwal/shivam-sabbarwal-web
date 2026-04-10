#!/usr/bin/env bun
/**
 * Generic screenshot capture tool.
 *
 * Usage:
 *   bun scripts/capture.mjs --url <url> --out <path> [options]
 *
 * Required:
 *   --url <url>          URL to capture
 *   --out <path>         Output image path (png or jpeg)
 *
 * Options:
 *   --width <px>         Viewport width                  (default: 1440)
 *   --height <px>        Viewport height                 (default: 900)
 *   --scale <n>          Device scale factor             (default: 2)
 *   --wait <ms>          Extra wait after load           (default: 1200)
 *   --full-page          Capture the full scrollable page
 *   --theme <value>      Seed localStorage theme before load
 *   --theme-key <key>    localStorage key for --theme    (default: shivam-sabbarwal-theme)
 *   --storage <k=v,...>  Arbitrary localStorage entries to seed
 *   --selector <sel>     Capture only the element matching this CSS selector
 *
 * Examples:
 *   bun scripts/capture.mjs --url https://example.com --out public/example.png
 *   bun scripts/capture.mjs --url http://localhost:3000 --out public/assets/projects/portfolio-light.png --theme light
 *   bun scripts/capture.mjs --url http://localhost:3000 --out public/assets/projects/portfolio-dark.png --theme dark
 *   bun scripts/capture.mjs --url https://example.com --out public/hero.png --selector "#hero" --full-page
 */

import { chromium } from 'playwright';

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith('--')) continue;
    const key = a.slice(2);
    const next = argv[i + 1];
    if (next === undefined || next.startsWith('--')) {
      args[key] = true;
    } else {
      args[key] = next;
      i++;
    }
  }
  return args;
}

const args = parseArgs(process.argv.slice(2));

if (!args.url || !args.out) {
  console.error('Missing required --url and/or --out arguments.');
  console.error('Run with no args to see usage in the file header.');
  process.exit(1);
}

const viewport = {
  width: Number(args.width ?? 1440),
  height: Number(args.height ?? 900),
};
const deviceScaleFactor = Number(args.scale ?? 2);
const waitMs = Number(args.wait ?? 1200);
const fullPage = Boolean(args['full-page']);
const themeKey = args['theme-key'] ?? 'shivam-sabbarwal-theme';

const storageEntries = [];
if (args.theme) storageEntries.push([themeKey, String(args.theme)]);
if (args.storage) {
  for (const pair of String(args.storage).split(',')) {
    const [k, ...rest] = pair.split('=');
    if (k) storageEntries.push([k.trim(), rest.join('=').trim()]);
  }
}

const browser = await chromium.launch();
const context = await browser.newContext({ viewport, deviceScaleFactor });
const page = await context.newPage();

if (storageEntries.length > 0) {
  await page.addInitScript((entries) => {
    for (const [k, v] of entries) localStorage.setItem(k, v);
  }, storageEntries);
}

await page.goto(String(args.url), { waitUntil: 'networkidle' });
if (waitMs > 0) await page.waitForTimeout(waitMs);

if (args.selector) {
  const el = page.locator(String(args.selector)).first();
  await el.screenshot({ path: String(args.out) });
} else {
  await page.screenshot({ path: String(args.out), fullPage });
}

await context.close();
await browser.close();
console.log(`Saved ${args.out}`);
