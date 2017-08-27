import { EmpSalryWithInjectablePage } from './app.po';

describe('emp-salry-with-injectable App', () => {
  let page: EmpSalryWithInjectablePage;

  beforeEach(() => {
    page = new EmpSalryWithInjectablePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
