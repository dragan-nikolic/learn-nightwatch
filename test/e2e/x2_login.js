require('env2')('.env'); // optionally store youre Evironment Variables in .env
var config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['x2Login'],
  'Login to X2V2 merchant': function(browser) {

    // Open X2 admin login page
    browser
      .url('https://admin.qa.x2v2.com/login')
      .waitForElementVisible('body')
      .assert.title('HCO Retail - Admin')
      .saveScreenshot(config.imgpath(browser) + 'x2-login-page.png');

    // Enter username
    browser
      .clearValue('input[type=text]')
      .setValue('input[type=text]', process.env.X2ADMIN_USERNAME)
      .assert.valueContains('input[type=text]', process.env.X2ADMIN_USERNAME)
      .saveScreenshot(config.imgpath(browser) + 'x2-login-email.png');

    // Enter password
    browser
      .clearValue('input[type=password]')
      .setValue('input[type=password]', process.env.X2ADMIN_PASSWORD)
      .assert.valueContains('input[type=password]', process.env.X2ADMIN_PASSWORD)
      .saveScreenshot(config.imgpath(browser) + 'x2-login-password.png');

    // Login
    browser
      .click('button[type=submit]')
      .waitForElementVisible('body')
      .assert.containsText('body', 'HCO RETAIL - ADMIN')
      .saveScreenshot(config.imgpath(browser) + 'x2-admin-page.png')
      .end();
  }
};
