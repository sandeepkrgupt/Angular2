import { WeekfindpipePage } from './app.po';

describe('weekfindpipe App', () => {
  let page: WeekfindpipePage;

  beforeEach(() => {
    page = new WeekfindpipePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
