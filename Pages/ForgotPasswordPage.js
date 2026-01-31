import { expect } from "allure-playwright";
import { BasePage } from "./BasePage.js";
export class ForgotPasswordPage extends BasePage {
    constructor(page, baseURL = 'https://automationteststore.com') {
        super(page, baseURL); //Calls BasePage Constructor

        //Locators 
        this.emailInput = () => this.page.locator('#forgottenFrm_email');
        this.loginNameInput = () => this.page.locator('#forgottenFrm_loginname');
        this.continueBtn = () => this.page.getByRole('button', { name: ' Continue' })




    }
    //Valid Username

    //Valid Email 
        async enterinfoAndSubmit(username, email){

        await this.loginNameInput().fill(username);
        await this.emailInput().fill(email);
        await this.clickContinueBtn();


    }
        async clickContinueBtn(){
        await this.continueBtn().click();
    }
}
