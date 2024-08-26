import LoginPage from "../pageobject/login.page.js";
import Dashboard from "../pageobject/dashboard.page.js";
import {
  credentials,
  invalidUsername,
  invalidPassword,
} from "../data/credentials.js";
import { SauseDemoUrl } from "../data/urls.js";

describe("Login Tests", () => {
  let loginPage = new LoginPage(SauseDemoUrl);
  let dashboard = new Dashboard(SauseDemoUrl);
  beforeEach(async () => {
    await loginPage.open();
  });

  it('should throw the error message: "Username is required"', async () => {
    await loginPage.login(invalidUsername, invalidPassword);
    await loginPage.clearInput(loginPage.passwordInput);
    await loginPage.clearInput(loginPage.usernameInput);
    await loginPage.loginButton.click();

    const errorMes = await loginPage.getErrorMessage();
    expect(errorMes).toContain("Username is required");
  });

  it('should throw the error message: "Password is required"', async () => {
    await loginPage.login(invalidUsername, invalidPassword);
    await loginPage.clearInput(loginPage.passwordInput);
    await loginPage.loginButton.click();

    const errorMes = await loginPage.getErrorMessage();
    expect(errorMes).toContain("Password is required");
  });
  credentials.forEach(({ username, password }) => {
    it('should validate the title "Swag Labs" in the dashboard', async () => {
      await loginPage.login(username, password);
      const dashboardTitle = await dashboard.getDashboardTitle();
      expect(dashboardTitle).toContain("Swag Labs");
    });
  });
});
