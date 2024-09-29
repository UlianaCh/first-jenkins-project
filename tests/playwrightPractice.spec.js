import {test} from '@playwright/test';
test('Youtube search', async ({page})=>{
    await page.goto("http://www.youtube.com");
    
    page.locator("//input[@id='search']")
    let searchBox = page.locator("//input[@id='search']");
    await searchBox.click();  // Focus on the search box for keyboard input
    await searchBox.fill("Cydeo");
    
    await searchBox.press("Enter");
    
    let firstResult = page.locator("(//a[@id='video-title'])[1]");
    await firstResult.click();  // Open the first YouTube video
   // await page.waitForTimeout(3000);

});