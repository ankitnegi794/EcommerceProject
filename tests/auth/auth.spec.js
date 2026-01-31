import { test, expect } from "@playwright/test";
import { HomePage } from "../../Pages/HomePage";
import { LoginPage } from "../../Pages/LoginPage";
import { ForgotPasswordPage } from "../../Pages/ForgotPasswordPage";

//test.describe('SignUp Test', () => {});

test.describe('Auth Flows', () => {

    test.beforeEach(async ({ page }) => {
        // test.info().log('Setting up Valid Login Test');


        //test.info().log('✅ Navigated to Login Page');
    });

    test('Invalid login Flow @regression', { timeout: 60000 }, async ({ page }) => {
        const homePage = new HomePage(page);
        const login = new LoginPage(page);
        await homePage.goToHomePage();
        await homePage.clickLoginLink();

        console.log('Executing Invalid Login Tests');

        await test.step('Logging in with Empty credentials', async () => {
            await login.clickLoginBtn();
            await expect(login.getInvalidCredentialsMsg()).toBeVisible();
            console.log('✅ Empty Login Tests Passed');
        });

        await test.step('Logging in with Invalid credentials', async () => {
            await login.enterCredentials('invalid@email.com', 'invalidpassword');
            await login.clickLoginBtn();
            await expect(login.getInvalidCredentialsMsg()).toBeVisible();
            console.log('✅ Invalid Login Tests Passed');
        });
    });

    test('Valid login/Logout Flow @regression', { timeout: 60000 }, async ({ page }) => {
        const homePage = new HomePage(page);
        const login = new LoginPage(page);
        await homePage.goToHomePage();
        await homePage.clickLoginLink();

        console.log('Executing Valid Login Test');
        await test.step('Logging in with Valid credentials', async () => {
            await login.loginToProfile('ankit.negi', 'Testing@123$');
            await expect(login.welcomeMsg()).toBeVisible();
            console.log('✅ Login Successful');
        });

        console.log('Executing Logout Test');
        await test.step('Logout Flow @regression', async () => {
            await login.clickLogoutBtn();
            await expect(login.welcomeMsg()).toBeHidden();
            console.log('✅ Logout Successful');
        });
    });
    test('Forgot Password flow @regression', { timeout: 60000 }, async ({ page }) => {
        const homePage = new HomePage(page);
        const login = new LoginPage(page);
        await homePage.goToHomePage();
        await homePage.clickLoginLink();

        const forgotPasswordPage = new ForgotPasswordPage(page);
        console.log('Executing Forgot Password Test');

        test.step('Navigating to Forgot Password Page', async () => {

            await login.clickForgotPasswordLink();
            await expect(page.url()).toBe(login.getForgotPasswordPageUrl());
            console.log('✅ Navigation to Forgot Password Page Successful');
        });
        await test.step('Entering Email and Submitting', async () => {
            await forgotPasswordPage.enterinfoAndSubmit('ankit.negi', 'ankit.negi@mailinator.com');
            await expect(page.url()).toBe('https://automationteststore.com/index.php?rt=account/forgotten/password');
            console.log('✅ User info submitted for password reset');


        });
    });

});