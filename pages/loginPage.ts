import { Page } from "@playwright/test";

export default class LoginPage{
//we are writing const. and functions for lacaters

constructor(public page: Page){ }

async enterEmail(emailaddress: string){
    await this.page.locator("#input-email")
        .type(emailaddress);
}

async enterLoginPassword(password: string){
    await this.page.locator("#input-password")
        .type(password);
}

async clickLoginBtn(){

    await Promise.all([

        this.page.waitForEvent("load"),  //instead of waitFornavigation I have used, but I m not sure
        this.page.click("input[value='Login']")
    ])
    
}

}