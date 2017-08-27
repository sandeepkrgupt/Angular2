import { EmployeeServicePage } from './app.po';

describe('employee-service App', () => {
  let page: EmployeeServicePage;

  beforeEach(() => {
    page = new EmployeeServicePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
