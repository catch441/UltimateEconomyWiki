import { UltimateEconomyWikiPage } from './app.po';

describe('ultimate-economy-wiki App', function() {
  let page: UltimateEconomyWikiPage;

  beforeEach(() => {
    page = new UltimateEconomyWikiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
