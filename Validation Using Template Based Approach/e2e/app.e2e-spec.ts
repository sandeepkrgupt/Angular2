import { ReactiveApproachPage } from './app.po';

describe('reactive-approach App', () => {
  let page: ReactiveApproachPage;

  beforeEach(() => {
    page = new ReactiveApproachPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
