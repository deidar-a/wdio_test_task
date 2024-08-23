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

  async clearInput(element) {
    //.clearValue() dont work for me, thats why im using this.
    log.info("Clearing the input field");
    await element.click();
    const elementlength = (await element.getValue()).length;
    for (let i = 0; i < elementlength; i++) {
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
