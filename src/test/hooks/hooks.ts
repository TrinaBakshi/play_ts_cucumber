import{BeforeAll, AfterAll, After, Before, Status} from "@cucumber/cucumber"
import {chromium, Page, Browser, BrowserContext} from "@playwright/test"
import { pageFixture } from "./pageFixture"
import path from "node:path";

let browser: Browser;
let page: Page;
let context:BrowserContext;

Before(async function() {
    browser = await chromium.launch({headless: false, channel: "chrome"});
    context = await browser.newContext({ storageState: "src/helper/auth/admin.json" });
    page = await context.newPage();
    pageFixture.page = page;
})

After(async function({pickle, result}) {
    if(result?.status === Status.FAILED){
        const img = await pageFixture.page.screenshot({path: `./test-result/screenshots/${pickle.name}.png`, type:'png'})
         this.attach(img, "image/png")
    }
    await pageFixture.page.close();
})

AfterAll(async function() {
    await browser.close();
})