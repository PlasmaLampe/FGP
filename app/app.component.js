System.register(['angular2/core', './app.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, app_service_1;
    var UserAddCtrl, RestaurantAddCtrl, RatingCtrl;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            }],
        execute: function() {
            UserAddCtrl = (function () {
                function UserAddCtrl(_fgpService) {
                    this._fgpService = _fgpService;
                    this.newUserName = '';
                    this.users = [];
                    this.users = _fgpService.userList;
                }
                UserAddCtrl.prototype.addUser = function (user) {
                    if (user === void 0) { user = this.newUserName; }
                    this.users.push(user);
                };
                UserAddCtrl = __decorate([
                    core_1.Component({
                        selector: 'user-add',
                        template: "\n    <h2>Einen Benutzer hinzuf\u00FCgen</h2>\n    <div>\n      <label>Dein Name: </label>\n      <div><input [(ngModel)]=\"newUserName\" placeholder=\"name\"></div>\n      <button (click)=\"addUser()\">Ich will auch essen!</button>\n    </div>\n    <h2>Bekannte Nutzer</h2>\n    <ul>\n    <li *ngFor='#user of users'> {{user}} </li>\n    </ul>\n    ",
                        providers: [app_service_1.FGPService]
                    }), 
                    __metadata('design:paramtypes', [app_service_1.FGPService])
                ], UserAddCtrl);
                return UserAddCtrl;
            })();
            exports_1("UserAddCtrl", UserAddCtrl);
            RestaurantAddCtrl = (function () {
                function RestaurantAddCtrl(_fgpService) {
                    this._fgpService = _fgpService;
                    this.newRestaurantName = '';
                    this.restaurants = [];
                    this.restaurants = _fgpService.restaurantList;
                }
                RestaurantAddCtrl.prototype.addRestaurant = function (aRestaurant) {
                    if (aRestaurant === void 0) { aRestaurant = this.newRestaurantName; }
                    this.restaurants.push(aRestaurant);
                };
                RestaurantAddCtrl = __decorate([
                    core_1.Component({
                        selector: 'restaurant-add',
                        template: "\n    <h2>Ein Restaurant hinzuf\u00FCgen</h2>\n    <div>\n      <label>Wo willst du sonst noch essen? </label>\n      <div><input [(ngModel)]=\"newRestaurantName\" placeholder=\"name\"></div>\n      <button (click)=\"addRestaurant()\">Da will ich essen!</button>\n    </div>\n    <h2>Bekannte Restaurants</h2>\n    <ul>\n    <li *ngFor='#restaurant of restaurants'> {{restaurant}} </li>\n    </ul>\n    ",
                        providers: [app_service_1.FGPService]
                    }), 
                    __metadata('design:paramtypes', [app_service_1.FGPService])
                ], RestaurantAddCtrl);
                return RestaurantAddCtrl;
            })();
            exports_1("RestaurantAddCtrl", RestaurantAddCtrl);
            RatingCtrl = (function () {
                function RatingCtrl(_fgpService) {
                    this._fgpService = _fgpService;
                    this.users = [];
                    this.users = _fgpService.userList;
                }
                RatingCtrl = __decorate([
                    core_1.Component({
                        selector: 'rating',
                        template: "\n    <h2>Heutige Wertung abgeben</h2>\n    <div>\n      <label>Wer bist du?</label>\n      <dropdown dropdown-height=\"200px\" dropdown-width=\"200px\"\n         [options]=\"users\"\n         (selection)=\"onSelection($event)\">\n        </dropdown>\n      <div><input [(ngModel)]=\"usePoints\" placeholder=\"points\"></div>\n      \n      <label>Wie viele Punkte m\u00F6chtest du setzen?</label>\n      <div><input [(ngModel)]=\"usePoints\" placeholder=\"points\"></div>\n      \n      <label>Wo m\u00F6chtest du hingehen?</label>\n      <div><input [(ngModel)]=\"usePoints\" placeholder=\"points\"></div>\n      \n      <button (click)=\"addRestaurant()\">Punkte setzen</button>\n    </div>\n    ",
                        providers: [app_service_1.FGPService]
                    }), 
                    __metadata('design:paramtypes', [app_service_1.FGPService])
                ], RatingCtrl);
                return RatingCtrl;
            })();
            exports_1("RatingCtrl", RatingCtrl);
        }
    }
});
//# sourceMappingURL=app.component.js.map