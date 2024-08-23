import { Key } from "webdriverio";
import logger from "@wdio/logger";
const log = logger("LoginPage");

class LoginPage {
  get usernameInput() {
    return $("#user-name");
  }

  get passwordInput() {
    return $("#password");
  }

  get loginButton() {
    return $("#login-button");
  }

  get errorMessageContainer() {
    return $(".error-message-container");
  }

  async open() {
    log.info("Opening SauceDemo");
    await browser.url("https://www.saucedemo.com");
  }

  async login(username, password) {
    log.info(`Logging in with username: ${username} and password: ${password}`);
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
    await this.loginButton.click();
  }

  async clearUsername() {
    //.clearValue() dont work for me, thats why im using this.
    log.info("Clearing the username field");
    await this.usernameInput.click();
    const usernameLength = (await this.usernameInput.getValue()).length;
    for (let i = 0; i < usernameLength; i++) {
      await browser.keys(Key.Backspace);
    }
  }

  async clearPassword() {
    log.info("Clearing the password field");
    await this.passwordInput.click();
    const passwordLength = (await this.passwordInput.getValue()).length;
    for (let i = 0; i < passwordLength; i++) {
      await browser.keys(Key.Backspace);
    }
  }

  async getErrorMessage() {
    const errorMessage = await this.errorMessageContainer.getText();
    log.info(`Error message displayed: ${errorMessage}`);
    return errorMessage;
  }
}

export default new LoginPage();
