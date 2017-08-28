import { AsianSkyShopPage } from './app.po';

describe('asian-sky-shop App', () => {
  let page: AsianSkyShopPage;

  beforeEach(() => {
    page = new AsianSkyShopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
