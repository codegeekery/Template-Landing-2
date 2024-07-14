import { chromium } from "playwright";

async function getReviewsFromPage(page) {
    const reviews = await page.evaluate(() => {
        const reviewElements = document.querySelectorAll(".jftiEf");

        return Array.from(reviewElements, el => ({
            name: el.querySelector(".d4r55")?.textContent.trim(),
            content: el.querySelector(".wiI7pd")?.textContent.trim(),
            date: el.querySelector(".rsqaWe")?.textContent.trim(),
            ratings: parseFloat(el.querySelector(".kvMYJc")?.getAttribute("aria-label")),
        }));
    });
    return reviews;
}

async function scrollPage(page, scrollContainer) {
    let lastHeight = await page.evaluate((scrollContainer) => {
        return document.querySelector(scrollContainer).scrollHeight;
    }, scrollContainer);

    while (true) {
        await page.evaluate((scrollContainer) => {
            document.querySelector(scrollContainer).scrollTo(0, document.querySelector(scrollContainer).scrollHeight);
        }, scrollContainer);
        let newHeight = await page.evaluate((scrollContainer) => {
            return document.querySelector(scrollContainer).scrollHeight;
        }, scrollContainer);

        if (newHeight === lastHeight) {
            break;
        }
        lastHeight = newHeight;
    }
}


export const GET = async (request) => {
    const placeUrl = "https://www.google.com/maps/place/Starbucks/@47.532004,-122.194292,17z/data=!4m18!1m9!3m8!1s0x549069a98254bd17:0xb2f64f75b3edf4c3!2sStarbucks!8m2!3d47.532004!4d-122.194292!9m1!1b1!16s%2Fg%2F1tdfmzpb!3m7!1s0x549069a98254bd17:0xb2f64f75b3edf4c3!8m2!3d47.532004!4d-122.194292!9m1!1b1!16s%2Fg%2F1tdfmzpb?authuser=0&hl=en&entry=ttu";

    try {
        const browser = await chromium.launch({
            headless: true,
            args: ['--lang=en-US,en'],
            userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36',
        });
        const page = await browser.newPage();
        await page.goto(placeUrl);
        await page.waitForSelector('button.VfPpkd-LgbsSe');
        await page.click('button.VfPpkd-LgbsSe');
        await page.waitForSelector(".DxyBCb");
        await scrollPage(page, '.DxyBCb');
        const reviews = await getReviewsFromPage(page);



        await browser.close();
        return new Response(JSON.stringify({reviews, URL: placeUrl}), {
            status: 200,
            headers: {
                "content-type": "application/json",
            },
        });

    } catch (e) {
        return new Response(JSON.stringify({ message: "error" }), {
            status: 500,
            headers: {
                "content-type": "application/json",
            },
        });
    }

};