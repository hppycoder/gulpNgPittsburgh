describe('cashstar merchant tests', function() {
  it('should load the Papa Johns experience', function () {
    browser.get('/virtualgift/build/#/egift/merchant/CS-PAPAJ');

    element(by.id('ng-app')).evaluate('giftData.gift.experience').then(function (experience) {
      expect(experience.id).toBe('CS-PAPAJ');
    });
  });
});