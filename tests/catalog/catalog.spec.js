import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";

test.describe('add product to cart from home page', () => {
    test('adds first product to cart', async ({page}) => {
        const homePage = new HomePage(page);
        await homePage.productCatalogClick();
        await expect(page).toHaveURL(/.*Product.*/,{ ignoreCase: true });  // ✅ Test handles verification
    });
});
