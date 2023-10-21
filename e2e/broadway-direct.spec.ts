import { test, expect } from "@playwright/test";
import { chromium } from "playwright-extra";
import { userInfo } from "./user-info";
import { broadwayDirect } from "./shared";
import stealthPlugin from "puppeteer-extra-plugin-stealth";

// Load the stealth plugin and use defaults (all tricks to hide playwright usage)
// Note: playwright-extra is compatible with most puppeteer-extra plugins
const stealth = stealthPlugin();

// Add the plugin to playwright (any number of plugins can be added)
chromium.use(stealth);

const urls = [
  "https://lottery.broadwaydirect.com/show/six-ny/",
  "https://lottery.broadwaydirect.com/show/mj-ny/",
];

urls.forEach((url) => {
  test(`Sign up at ${url}`, async () => {
    const browser = await chromium.launch({ headless: false });
    await broadwayDirect({ browser, userInfo, url });
  });
});
