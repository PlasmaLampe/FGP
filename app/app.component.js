System.register(['angular2/core', './app.service', 'angular2/common', 'ng2-bootstrap/ng2-bootstrap'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, app_service_1, common_1, ng2_bootstrap_1;
    var UserAddCtrl, RestaurantAddCtrl, RatingCtrl;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
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
                        template: "\n    <h2>Einen Benutzer hinzuf\u00FCgen</h2>\n    <div>\n      <label>Dein Name: </label>\n      <div><input [(ngModel)]=\"newUserName\" placeholder=\"name\"></div>\n      <button (click)=\"addUser()\">Ich will auch essen!</button>\n    </div>\n    <h3>Bekannte Nutzer</h3>\n    <ul>\n    <li *ngFor='#user of users'> {{user}} </li>\n    </ul>\n    ",
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
                        template: "\n    <h2>Ein Restaurant hinzuf\u00FCgen</h2>\n    <div>\n      <label>Wo willst du sonst noch essen? </label>\n      <div><input [(ngModel)]=\"newRestaurantName\" placeholder=\"name\"></div>\n      <button (click)=\"addRestaurant()\">Da will ich essen!</button>\n    </div>\n    <h3>Bekannte Restaurants</h3>\n    <ul>\n    <li *ngFor='#restaurant of restaurants'> {{restaurant}} </li>\n    </ul>\n    ",
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
                    this.selectedUser = 'Konrad Zuse ... achnee ...';
                    this.users = [];
                    this.selectedRestaurant = 'Die Batcave...';
                    this.restaurants = [];
                    this.users = _fgpService.userList;
                    this.restaurants = _fgpService.restaurantList;
                }
                RatingCtrl.prototype.selectUser = function (user) {
                    this.selectedUser = user;
                };
                RatingCtrl.prototype.selectRestaurant = function (rest) {
                    this.selectedRestaurant = rest;
                };
                RatingCtrl = __decorate([
                    core_1.Component({
                        selector: 'rating',
                        directives: [
                            ng2_bootstrap_1.DROPDOWN_DIRECTIVES, common_1.CORE_DIRECTIVES
                        ],
                        template: "\n    <h2>Heutige Wertung abgeben</h2>\n    <div>\n      <label>Wer bist du?</label>\n        <div class=\"dropdown\">\n        <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n            {{selectedUser}}\n            <span class=\"caret\"></span>\n        </button>\n        <ul class=\"dropdown-menu\" aria-labelledby=\"Userlist\">\n            <li *ngFor='#user of users'><a href=\"#\" (click)='selectUser(user)'>{{user}}</a></li>\n        </ul>\n        </div>\n      \n      <label>Wie viele Punkte m\u00F6chtest du setzen?</label>\n      <div><input [(ngModel)]=\"usePoints\"></div>\n      \n      <label>Wo m\u00F6chtest du hingehen?</label>\n        <div class=\"dropdown\">\n        <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n            {{selectedRestaurant}}\n            <span class=\"caret\"></span>\n        </button>\n        <ul class=\"dropdown-menu\" aria-labelledby=\"Restaurantlist\">\n            <li *ngFor='#restaurant of restaurants'><a href=\"#\" (click)='selectRestaurant(restaurant)'>{{restaurant}}</a></li>\n        </ul>\n        </div>\n      \n      <button (click)=\"addRestaurant()\">Punkte setzen</button>\n    </div>\n    ",
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
