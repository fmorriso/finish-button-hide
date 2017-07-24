import { BradPage } from './app.po';

describe('brad App', () => {
  let page: BradPage;

  beforeEach(() => {
    page = new BradPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
