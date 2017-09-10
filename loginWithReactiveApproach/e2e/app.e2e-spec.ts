import { Template1Page } from './app.po';

describe('template1 App', () => {
  let page: Template1Page;

  beforeEach(() => {
    page = new Template1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
