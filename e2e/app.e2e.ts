import { CliPlanningPokerPage } from './app.po';

describe('cli-planning-poker App', function() {
  let page: CliPlanningPokerPage;

  beforeEach(() => {
    page = new CliPlanningPokerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cli-planning-poker works!');
  });
});
