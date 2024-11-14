import puppeteer from "puppeteer";

(async function () {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    // await page.setViewport({ width: 1920, height: 1080 });

    await page.goto("https://www.google.com");

    await page.type("textarea#APjFqb", "Lisa Su");
    const element = await page.$("textarea#APjFqb");

    await element.press("Enter");

    await page.waitForNavigation({ waitUntil: "networkidle2" });

    await Promise.all([
        page.click("a > h3"),
        page.waitForNavigation({ waitUntil: "networkidle2" }),
    ]);

    await page.screenshot({ path: "./lisa_su.png", fullPage: true });

    await browser.close();
})();
