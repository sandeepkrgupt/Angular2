import { ClinicPage } from './app.po';

describe('clinic App', () => {
  let page: ClinicPage;

  beforeEach(() => {
    page = new ClinicPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
