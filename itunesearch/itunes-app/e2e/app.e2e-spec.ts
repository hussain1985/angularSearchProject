import { ItunesAppPage } from './app.po';

describe('itunes-app App', () => {
  let page: ItunesAppPage;

  beforeEach(() => {
    page = new ItunesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
