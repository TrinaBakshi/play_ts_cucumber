import {Given, setDefaultTimeout, Then, When} from "@cucumber/cucumber"
import {chromium, Page, Browser, expect} from "@playwright/test"
import { pageFixture } from "../hooks/pageFixture";

setDefaultTimeout(30 * 1000);

Given('User navigates to the application', async function () {
  await pageFixture.page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
});


When('User enter the emailID as {string}', async function (emailID) {
  await pageFixture.page.locator('#input-email').fill(emailID);
})

When('User enter the password as {string}', async function (password) {
  await pageFixture.page.locator('#input-password').fill(password);
});

When('User click on the login button', async function () {
  await pageFixture.page.locator("[value='Login']").click();
});

Then('Login should be success', async function () {
  const title = await pageFixture.page.title();
    console.log("home page title: ", title);
    expect(title).toEqual('My Account');
});

Then('Login should fail', async function () {
   const errorMsg = pageFixture.page.locator('//div[normalize-space(text())="Warning: No match for E-Mail Address and/or Password."]');
   await expect(errorMsg).toBeVisible({timeout:10000});
   await expect(errorMsg).toContainText("No match for E-Mail Address and/or Password");

    //Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.
});

