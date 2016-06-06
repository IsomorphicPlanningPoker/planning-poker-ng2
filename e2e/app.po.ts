export class CliPlanningPokerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cli-planning-poker-app h1')).getText();
  }
}
