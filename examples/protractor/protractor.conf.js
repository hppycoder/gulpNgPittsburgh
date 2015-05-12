exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  onPrepare: function() {
    browser.driver.manage().window().setSize(1600,800);
  }
};