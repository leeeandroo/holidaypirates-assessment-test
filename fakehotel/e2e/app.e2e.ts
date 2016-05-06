import { FakehotelPage } from './app.po';

describe('fakehotel App', function() {
  let page: FakehotelPage;

  beforeEach(() => {
    page = new FakehotelPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fakehotel Works!');
  });
});
