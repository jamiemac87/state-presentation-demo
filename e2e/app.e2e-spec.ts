import { StatePresentationPage } from './app.po';

describe('state-presentation App', () => {
  let page: StatePresentationPage;

  beforeEach(() => {
    page = new StatePresentationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
