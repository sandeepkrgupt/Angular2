import { TrianglePage } from './app.po';

describe('triangle App', () => {
  let page: TrianglePage;

  beforeEach(() => {
    page = new TrianglePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
