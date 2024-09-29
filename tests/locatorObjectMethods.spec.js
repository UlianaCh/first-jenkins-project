import {test} from "@playwright/test";
import { before, beforeEach } from "node:test";
test.describe('Test Group', () => {
    test.beforeEach(async({page})=>{
        await page.goto('https://practice.cydeo.com/');
    });
    test('Check() checks unchecked radiobuttons and checkboxes', async ({ page }) => {
      let checkboxesLink = page.locator("text='Checkboxes'");
      await checkboxesLink.click();
      let checkBox1 = page.locator('#box1');
     
      await checkBox1.check();
     
    });
  
    test('Uncheck() unchecks checked radiobuttons and checkboxes', async ({ page }) => {
        let checkboxesLink = page.locator("text='Checkboxes'");
        await checkboxesLink.click();
        let checkBox2 = page.locator('#box2');
        
        await checkBox2.uncheck();

    });
    test('selectOption() for dropdowns', async ({ page }) => {
        let dropdownLink = page.locator("text='Dropdown'");
        await dropdownLink.click();
        let simpleDropdown=page.locator("//select[@id='dropdown']");
        //select by value
       // await simpleDropdown.selectOption('1');
        //select by visible text
        await simpleDropdown.selectOption({label:'Option 1'});
        //select by index
      //  await simpleDropdown.selectOption({index:2});
        

    });
    //create an empty test
    test('innerText() retrieves the visible text', async ({ page }) => {
        let headerElement = page.locator("//span[@class='h1y']");
        let actualText = await headerElement.innerText();
        console.log(actualText);
    });
 // create an empty test
  test('inputValue() only works with <input>, <select>, <textarea>', async ({ page }) => {
        await page.getByText("Inputs").click();
        let inputBox = page.locator("//input[@type='number']");
        await inputBox.fill("123");

        let inputValue = await inputBox.inputValue();
        console.log(inputValue);
    });
});