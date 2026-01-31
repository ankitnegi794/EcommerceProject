import { expect } from "allure-playwright";
import { BasePage } from "./BasePage.js";  
export class HomePage extends BasePage{
    constructor(page, baseURL = 'https://automationteststore.com'){
        super(page, baseURL); //Calls BasePage Constructor 

        //Define selectors specific to Home Page
     
        this.searchInput = () => this.page.locator('#filter_keyword');
        this.searchBtn = () => this.page.locator('.fa.fa-search').first();
        this.logInNavBtn = () => this.page.getByText('Login or register');
        this.cartBtn = () => this.page.getByRole('link', { name: '  Cart' })
        this.accountbtn = () => this.page.getByRole('link', { name: '  Account', exact: true })
        //this.products = this.page.locator('//div[@id="shopify-section-1586282516064"]//product-item');
        //this.cartPopup = this.page.getByText('MY BAG', { exact: false });
        //this.subscribePopup =  this.page.getByText('SUBSCRIBE NOW')
        //this.subscribePopupClosebtn = () => this.page.locator('.popup-subscription__close > .icon')
        //this.logoutPopup = this.page.getByText('WELCOME', { exact: false});
        
    }


  //Handling Newsletter Subscription Popup
  async dismissSubscribePopup(){
    await this.signupBtn().click();
     await expect(this.subscribePopup).toBeVisible({ timeout: 20000 });
      await this.subscribePopupClosebtn().click();
    
  }
  async goToHomePage(){
    await this.page.goto('https://automationteststore.com/');
    await this.page.waitForLoadState('networkidle');
  }
/*
  async productCatalogClick(){
    await this.products.first().click();
 
}
    */
  async clickLoginLink(){
    await this.logInNavBtn().click();
 
}

async hoverAccountLink(){ 
    await this.accountbtn().hover();
}
  
 async clickShoppingCart(){
    await this.cartBtn().click();
}
}