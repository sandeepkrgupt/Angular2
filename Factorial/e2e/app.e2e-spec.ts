import { TrymultiplePage } from './app.po';

describe('trymultiple App', () => {
  let page: TrymultiplePage;

  beforeEach(() => {
    page = new TrymultiplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
