import { ArcherFrontEndPage } from './app.po';

describe('archer-front-end App', () => {
  let page: ArcherFrontEndPage;

  beforeEach(() => {
    page = new ArcherFrontEndPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
