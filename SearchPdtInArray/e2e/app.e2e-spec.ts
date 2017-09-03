import { SearchpipePage } from './app.po';

describe('searchpipe App', () => {
  let page: SearchpipePage;

  beforeEach(() => {
    page = new SearchpipePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
