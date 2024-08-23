import LoginPage from "../pageobject/login.page.js";
import Dashboard from "../pageobject/dashboard.page.js";
import {
  validUsername,
  validPassword,
  invalidUsername,
  invalidPassword,
} from "../data/credentials.js";
import loginPage from "../pageobject/login.page.js";

describe("Login Tests", () => {
  beforeEach(async () => {
    await LoginPage.open();
  });

  it('should throw the error message: "Username is required"', async () => {
    await LoginPage.login(invalidUsername, invalidPassword);
    await LoginPage.clearInput(loginPage.passwordInput);
    await LoginPage.clearInput(loginPage.usernameInput);
    await LoginPage.loginButton.click();

    const errorMes = await LoginPage.getErrorMessage();
    expect(errorMes).toContain("Username is required");
  });

  it('should throw the error message: "Password is required"', async () => {
    await LoginPage.login(invalidUsername, invalidPassword);
    await LoginPage.clearInput(loginPage.passwordInput);
    await LoginPage.loginButton.click();

    const errorMes = await LoginPage.getErrorMessage();
    expect(errorMes).toContain("Password is required");
  });

  it('should validate the title "Swag Labs" in the dashboard', async () => {
    await LoginPage.login(validUsername, validPassword);
    const dashboardTitle = await Dashboard.getDashboardTitle();
    expect(dashboardTitle).toContain("Swag Labs");
  });
});
