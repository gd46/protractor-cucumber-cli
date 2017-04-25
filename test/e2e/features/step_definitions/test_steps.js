var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {
  When('I go to github', function () {
      browser.ignoreSynchronization = true;
			return browser.get(browser.baseUrl);
   });

   Then('I should see the header logo', function () {
      browser.ignoreSynchronization = true;
			return expect($('.header-logo-invertocat').isDisplayed()).to.become(true);
    });
});