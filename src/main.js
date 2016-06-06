System.register(['@angular/platform-browser-dynamic', '@angular/core', './app/'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, core_1, _1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1_1) {
                _1 = _1_1;
            }],
        execute: function() {
            if (_1.environment.production) {
                core_1.enableProdMode();
            }
            platform_browser_dynamic_1.bootstrap(_1.CliPlanningPokerAppComponent);
        }
    }
});
//# sourceMappingURL=main.js.map