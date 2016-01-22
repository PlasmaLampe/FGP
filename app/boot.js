System.register(['angular2/platform/browser', './app.component'], function(exports_1) {
    var browser_1, app_component_1, app_component_2, app_component_3;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
                app_component_2 = app_component_1_1;
                app_component_3 = app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.UserAddCtrl);
            browser_1.bootstrap(app_component_2.RestaurantAddCtrl);
            browser_1.bootstrap(app_component_3.RatingCtrl);
        }
    }
});
