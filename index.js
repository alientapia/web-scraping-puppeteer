const puppeteer = require('puppeteer');

async function start(){

    try {
        const URL = 'http://www.beisbolcubano.cu/'
        const browser = await puppeteer.launch({headless: false},)
        const page = await browser.newPage()
 
        await page.goto(URL)
        await page.waitForSelector("#MainContent_ctl32_rdoPollOptionList_2");
        await page.click("#MainContent_ctl32_rdoPollOptionList_2");
        await page.waitForSelector("#MainContent_ctl32_btnVote");
        await page.click("#MainContent_ctl32_btnVote");
        await page.waitForSelector("#MainContent_ctl32_voto_hecho");
        await page.waitFor(5000);
        await browser.close();
 
    } catch (error) {
        console.error(error)
    }
}

for(var i=0;i<3;i++){

    start();
}