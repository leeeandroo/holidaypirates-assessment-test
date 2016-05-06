export class FakehotelPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fakehotel-app p')).getText();
  }
}
