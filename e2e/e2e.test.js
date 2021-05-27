import puppetteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000);// default puppeteer timeout
describe('form', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';
  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });
    browser = await puppetteer.launch({
    /* headless: false,     // eslint-disable-line
      slowMo: 100,
      devtools: true, */
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });
  test('form', async () => {
    await page.goto(baseUrl);
    const button = await page.$('.btn');
    button.click();
    await page.$('.popover');
  });
});
