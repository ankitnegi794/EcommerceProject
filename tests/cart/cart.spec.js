import { test, expect } from "@playwright/test";
import { HomePage } from "../../Pages/HomePage";
test.describe('Cart Test', () => {
    test('Click on Cart', async ({page}) => {
        const homePage = new HomePage(page);
        await homePage.goToHomePage();
        await homePage.clickShoppingCart();
       
    });
});
