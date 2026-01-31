import { BasePage } from "./BasePage.js";  
import { HomePage } from "./HomePage.js";
export class LoginPage extends BasePage {
    constructor(page, baseURL = 'https://automationteststore.com') {
        super(page, baseURL); //Calls BasePage Constructor 

        //Define selectors specific to Login Page
        //Inputs and Buttons
        this.userEmailInput = () => this.page.locator('#loginFrm_loginname');
        this.userPasswordInput = () => this.page.locator('#loginFrm_password');
        this.loginBtn = () => this.page.locator('//button[@title="Login"]');
        this.forgotPasswordLink = () => this.page.getByRole('link', { name: 'Forgot your password?' });  
        this.logoffBtn = () => this.page.locator('//a[text()="Logoff"]');
        this.welcomeMsg = () => this.page.getByRole('link', { name: 'Welcome back', exact: false });  

        //Outputs and Messages
        this.getInvalidCredentialsMsg = () => this.page.getByText('× Error: Incorrect login or', { exact: false });
        this.getForgotPasswordPageUrl = () => 'https://automationteststore.com/index.php?rt=account/forgotten/password'; 
       // this.loginErrorMsg = this.page.locator('.alert.alert-danger');
       
        // this.signUpBtn = () => this.page.getByRole('link', { name: 'Sign up now!' });
    }

  async enterCredentials(email, password){
    await this.userEmailInput().fill(email);
    await this.userPasswordInput().fill(password);
  }

  async loginToProfile(email, password){
    // Convenience method to perform login by entering credentials and clicking the login button
    await this.enterCredentials(email, password);
    await this.clickLoginBtn();
  }

  async clickLoginBtn(){
    await this.loginBtn().click();
  }

  async clickLogoutBtn(){
    await this.logoffBtn().click();
  }
  async clickForgotPasswordLink(){
    await this.forgotPasswordLink().click();
  }
    
}