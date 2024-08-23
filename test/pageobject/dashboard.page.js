import logger from "@wdio/logger";
const log = logger("Dashboard");
class Dashboard {
  get appLogo() {
    return $(".app_logo");
  }
  async getDashboardTitle() {
    const dashboardTitle = await this.appLogo.getText();
    log.info(`Dashboard title: ${dashboardTitle}`);
    return dashboardTitle;
  }
}
export default new Dashboard();
