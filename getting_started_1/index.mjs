import puppeteer from "puppeteer";

(async function () {
    // const browser = puppeteer.launch({
    //     headless: false,
    // });
    // const page = await browser.newPage();
    const browser = await puppeteer.launch({ headless: false }); // We use this option to go into non-headless mode
    const page = await browser.newPage();

    const searchBarSelector = "div.navbarSearchContainer_IP3a";
    const searchInputSelector = "input#docsearch-input";
    const topHitResultSelector =
        "#docsearch-hits0-item-0 .DocSearch-Hit-Container";
    const searchTerm = "metric";

    await page.goto("https://pptr.dev");
    await page.locator(searchBarSelector).click();
    await page.locator(searchInputSelector).fill(searchTerm);
    await page.locator(topHitResultSelector).click();

    // await page.waitFor(5000);
    await browser.close();
})();
