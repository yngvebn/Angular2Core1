System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MyService;
    return {
        setters:[],
        execute: function() {
            MyService = (function () {
                function MyService() {
                }
                MyService.prototype.getGreeting = function () {
                    return "Hello service!";
                };
                return MyService;
            }());
            exports_1("MyService", MyService);
        }
    }
});
//# sourceMappingURL=myService.js.map