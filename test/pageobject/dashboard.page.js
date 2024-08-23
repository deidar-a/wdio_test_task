import logger from "@wdio/logger";
import BasePage from "./basePage.page.js";
const log = logger("Dashboard");
class Dashboard extends BasePage {
  get appLogo() {
    return $(".app_logo");
  }
  async getDashboardTitle() {
    const dashboardTitle = await this.appLogo.getText();
    log.info(`Dashboard title: ${dashboardTitle}`);
    return dashboardTitle;
  }
}
export default Dashboard;
