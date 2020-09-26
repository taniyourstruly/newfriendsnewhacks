const pup = require('puppeteer');

async function scrapeProduct(url){
    const browser = await pup.launch();
    const page = await browser.newPage();
    await page.goto(url);

    let random = Math.floor(Math.random()*50 + 1);

    const [why] = await page.$x("/html/body/div[2]/div/div[1]/div/h3[" + random + "]");
    const txt = await why.getProperty("textContent");
    const rawTxt = await txt.jsonValue();

    let refinetxt = 

    console.log(rawTxt);


    browser.close();
}

scrapeProduct("https://www.briantracy.com/blog/personal-success/26-motivational-quotes-for-success/");