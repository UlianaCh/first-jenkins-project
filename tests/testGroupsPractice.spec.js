import{test} from "@playwright/test"
test.describe('@smoke Test Group', () => {
   
    test.beforeEach(async({page})=>{
       await page.goto("https://practice.cydeo.com/")
    });
    test.afterEach(async({page})=>{
       // await page.waitForTimeout(3000);
    });
    test('Get Title', async ({ page }) => {
        console.log(await page.title());
    });
  
    test('get url', async ({ page }) => {
        console.log(page.url());
    });
  
   
  });