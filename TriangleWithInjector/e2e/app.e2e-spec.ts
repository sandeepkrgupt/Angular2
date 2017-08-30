import { TriangleWithInjectorPage } from './app.po';

describe('triangle-with-injector App', () => {
  let page: TriangleWithInjectorPage;

  beforeEach(() => {
    page = new TriangleWithInjectorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
