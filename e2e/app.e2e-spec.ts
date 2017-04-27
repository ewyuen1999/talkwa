import { TalkwaPage } from './app.po';

describe('talkwa App', function() {
  let page: TalkwaPage;

  beforeEach(() => {
    page = new TalkwaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
