System.register(['./environment', './cli-planning-poker.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (environment_1_1) {
                exportStar_1(environment_1_1);
            },
            function (cli_planning_poker_component_1_1) {
                exportStar_1(cli_planning_poker_component_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=index.js.map