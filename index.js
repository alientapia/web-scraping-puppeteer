const puppeteer = require('puppeteer');

async function start(){

    try {
        const URL = 'http://www.beisbolcubano.cu/'
        const browser = await puppeteer.launch({headless: false},)
        const page = await browser.newPage()
 
        await page.goto(URL)
        await page.waitFor(3000);
        await page.click("#MainContent_ctl32_rdoPollOptionList_2");
        await page.click("#MainContent_ctl32_btnVote");
        await page.waitFor(15000);//
        await browser.close();
 
    } catch (error) {
        console.error(error)
    }
}

for(var i=0;i<3;i++){

    start();
}