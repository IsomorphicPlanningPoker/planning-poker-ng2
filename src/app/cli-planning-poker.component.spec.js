System.register(['@angular/core/testing', '../app/cli-planning-poker.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, cli_planning_poker_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (cli_planning_poker_component_1_1) {
                cli_planning_poker_component_1 = cli_planning_poker_component_1_1;
            }],
        execute: function() {
            testing_1.beforeEachProviders(function () { return [cli_planning_poker_component_1.CliPlanningPokerAppComponent]; });
            testing_1.describe('App: CliPlanningPoker', function () {
                testing_1.it('should create the app', testing_1.inject([cli_planning_poker_component_1.CliPlanningPokerAppComponent], function (app) {
                    testing_1.expect(app).toBeTruthy();
                }));
                testing_1.it('should have as title \'cli-planning-poker works!\'', testing_1.inject([cli_planning_poker_component_1.CliPlanningPokerAppComponent], function (app) {
                    testing_1.expect(app.title).toEqual('cli-planning-poker works!');
                }));
            });
        }
    }
});
//# sourceMappingURL=cli-planning-poker.component.spec.js.map