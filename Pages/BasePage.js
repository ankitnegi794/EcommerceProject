export class BasePage {
  constructor(page, baseURL) {
    this.page = page;
    this.baseURL = baseURL;
  }

  async goto(relativePath = '') {
    const url = this.baseURL + relativePath;
    await this.page.goto(url, { waitUntil: 'networkidle' });
  }

  getLocator(selector) {
    return this.page.locator(selector);
  }

  async click(itemOrSelector, options = {}) {
  const loc = typeof itemOrSelector === 'string' 
    ? this.getLocator(itemOrSelector) 
    : itemOrSelector;
    
  await loc.click({ 
    timeout: 5000,  // ↓ Short timeout
    force: true 
  });
}


  async fill(itemOrSelector, value) {
    try {
      let loc;
      if (typeof itemOrSelector === 'string') {
        loc = this.getLocator(itemOrSelector);
      } else {
        loc = itemOrSelector;
      }
      await loc.waitFor({ state: 'visible' });
      await loc.fill(value);
    } catch (error) {
      console.error(`Fill failed: ${error.message}`);
      throw error;
    }
  }

  async verifyURL(contains) {
    const currentURL = this.page.url();
    const result = currentURL.includes(contains);
    console.log(`URL check: "${currentURL}" contains "${contains}" = ${result}`);
    return result;
  }
}
