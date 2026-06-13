import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  // Emulate mobile
  await page.setViewport({ width: 375, height: 812, isMobile: true });
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  
  await page.goto('http://localhost:5173');
  
  await page.waitForTimeout(3000); // wait 3s
  
  // check loading text
  const percentText = await page.evaluate(() => {
    const el = document.querySelector('.mono-percent');
    return el ? el.innerText : 'not found';
  });
  console.log('PERCENT:', percentText);
  
  await browser.close();
})();
