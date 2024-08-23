import logger from "@wdio/logger";
import BasePage from "./basePage.page.js";
const log = logger("LoginPage");

class LoginPage extends BasePage {
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

  async login(username, password) {
    log.info(`Logging in with username: ${username} and password: ${password}`);
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
    await this.loginButton.click();
  }

  async getErrorMessage() {
    const errorMessage = await this.errorMessageContainer.getText();
    log.info(`Error message displayed: ${errorMessage}`);
    return errorMessage;
  }
}

export default LoginPage;
