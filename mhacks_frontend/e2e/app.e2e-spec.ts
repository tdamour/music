import { MhacksFrontendPage } from './app.po';

describe('mhacks-frontend App', function() {
  let page: MhacksFrontendPage;

  beforeEach(() => {
    page = new MhacksFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
