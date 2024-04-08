const { test, expect, beforeAll, afterAll, beforeEach, afterEach } = require('@playwright/test');

let page;

beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

afterAll(async () => {
  await page.close();
});

beforeEach(async () => {
  await page.goto('http://localhost:20000/manofthematch');
  await page.waitForLoadState('load');
  await page.waitForTimeout(1000);
  await page.click('#deleteAllButton');
  await page.waitForTimeout(500);
});

afterEach(async () => {
  // Limpieza después de cada prueba si es necesario
});

test('has title SOS2324-17 Project', async () => {
  test.setTimeout(60000);
  await page.goto('http://localhost:20000');
  await expect(page).toHaveTitle(/SOS2324-17 Project/);
});

test('load and list economic freedom stats', async () => {
  test.setTimeout(60000);
  await page.goto('http://localhost:20000/api/v2/manofthematch/loadInitialData');
  await page.goto('http://localhost:20000/manofthematch');
  await page.waitForLoadState('load');
  await page.waitForTimeout(1000);
  await expect((await page.locator('.tarjetas-datos').all()).length).toBeGreaterThan(5);
});

test('delete resource', async () => {
  test.setTimeout(60000);
  await page.goto('http://localhost:20000/api/v2/manofthematch/loadInitialData');
  await page.goto('http://localhost:20000/api/v2/manofthematch/loadInitialData');
  await page.waitForTimeout(1000);
  await page.goto('http://localhost:20000/manofthematch');
  await page.goto('http://localhost:20000/manofthematch');
  await page.waitForLoadState('load');
  await page.waitForTimeout(1000);
  let resourceTitleBeforeDelete = await page.textContent('.tarjeta:first-child .card-title');
  await page.click('#deleteResourceButton');
  await page.click('#deleteResourceButton');
  await page.click('#deleteResourceButton');
  await page.waitForTimeout(1000);
  let resourceTitleAfterDelete = await page.textContent('.tarjeta:first-child .card-title');
  expect(resourceTitleAfterDelete).not.toEqual(resourceTitleBeforeDelete);
});
test('delete all resources', async () => {
  test.setTimeout(90000);
  await page.goto('http://localhost:20000/api/v2/manofthematch/loadInitialData');
  await page.goto('http://localhost:20000/api/v2/manofthematch/loadInitialData');
  await page.waitForTimeout(1000);
  await page.goto('http://localhost:20000/manofthematch');
  await page.goto('http://localhost:20000/manofthematch');
  await page.waitForLoadState('load');
  await page.waitForTimeout(1000);
  let cardElements = await page.locator('.tarjetas-datos').count();
  expect(cardElements).toBeGreaterThan(5);
  await page.click('#deleteAllButton');
  await page.click('#deleteAllButton'); 
  await page.waitForTimeout(1000);
  let updatedCardElements = await page.locator('.tarjetas-datos').count();
  expect(updatedCardElements).toBe(0);
});




test('pagination works', async () => {
  test.setTimeout(60000);
  await page.goto('http://localhost:20000/api/v2/manofthematch/loadInitialData');
  await page.goto('http://localhost:20000/api/v2/manofthematch/loadInitialData');
  await page.goto('http://localhost:20000/manofthematch');
  await page.waitForLoadState('load');
  await page.waitForTimeout(1000);
  let resourceTitleFirstPage = await page.textContent('.tarjeta:first-child .card-title');
  await page.click('button:has-text("Siguiente")');
  await page.click('button:has-text("Siguiente")');
  await page.waitForTimeout(1000);
  let resourceTitleSecondPage = await page.textContent('.tarjeta:first-child .card-title');
  expect(resourceTitleSecondPage).not.toEqual(resourceTitleFirstPage);
});