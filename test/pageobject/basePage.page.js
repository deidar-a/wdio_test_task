import { Key } from "webdriverio";
import logger from "@wdio/logger";
const log = logger("BasePage");
class BasePage {
  constructor(url) {
    this.url = url;
  }

  async open() {
    log.info(`Opening ${this.url}`);
    if (browser.getUrl() != this.url) {
      await browser.url(this.url);
    }
  }

  async clearInput(element) {
    const elementValue = await element.getValue();
    log.info(`Clearing the ${elementValue}`);
    await element.click();
    const elementlength = elementValue.length;
    for (let i = 0; i < elementlength; i++) {
      await browser.keys(Key.Backspace);
    }
  }
}

export default BasePage;
