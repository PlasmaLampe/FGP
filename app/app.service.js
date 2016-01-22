System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2, core_3;
    var DevConfigService, FGPService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
                core_3 = core_1_1;
            }],
        execute: function() {
            DevConfigService = (function () {
                function DevConfigService() {
                }
                DevConfigService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], DevConfigService);
                return DevConfigService;
            })();
            exports_1("DevConfigService", DevConfigService);
            FGPService = (function () {
                function FGPService() {
                    this.userList = [];
                    this.restaurantList = [];
                    this.mockUserList = true;
                    this.mockUsers = ['Hendrik', 'Volker', 'Virgilio', 'Jörg'];
                    this.mockRestaurantList = true;
                    this.mockRestaurants = ['Pizza Pazza', 'Sasan', 'Nehring', 'Der Japaner'];
                    this.choices = [{
                            name: 'Virgilio',
                            choice: 'Nehring',
                            points: 4
                        }, {
                            name: 'Hendrik',
                            choice: 'Pizza Pazza',
                            points: 5
                        }];
                    this.userAccounts = [];
                    this.onChoiceMade = new core_2.EventEmitter();
                    // FIXME fetch data from backend
                    if (this.mockRestaurantList) {
                        for (var _i = 0, _a = this.mockRestaurants; _i < _a.length; _i++) {
                            var restaurant = _a[_i];
                            this.restaurantList.push(restaurant);
                        }
                    }
                    if (this.mockUserList) {
                        for (var _b = 0, _c = this.mockUsers; _b < _c.length; _b++) {
                            var user = _c[_b];
                            this.userList.push(user);
                        }
                    }
                    this.initData();
                }
                /**
                 * Creates new accounts with 10 points for every user in the userlist that has no account, yet
                 */
                FGPService.prototype.initData = function () {
                    // create new user-accounts
                    for (var _i = 0, _a = this.userList; _i < _a.length; _i++) {
                        var user = _a[_i];
                        var foundAccount = false;
                        for (var _b = 0, _c = this.userAccounts; _b < _c.length; _b++) {
                            var account = _c[_b];
                            if (account.name === user) {
                                foundAccount = true;
                            }
                        }
                        if (!foundAccount) {
                            this.userAccounts.push({
                                name: user,
                                points: 10
                            });
                        }
                    }
                };
                FGPService.prototype.makeAChoice = function (user, choice, points) {
                    var acc = this.getUserAccount(user);
                    if (acc.points < points) {
                        alert('Netter Versuch, aber sooo viele Punkte hast du nicht ;-)');
                        return;
                    }
                    else {
                        this.updateUserAccount(user, acc.points - points);
                        this.pushChoice(user, choice, points);
                        this.onChoiceMade.emit(null);
                        this.persistUserAccounts();
                        this.persistChoices();
                    }
                };
                FGPService.prototype.getUserAccount = function (name) {
                    for (var _i = 0, _a = this.userAccounts; _i < _a.length; _i++) {
                        var acc = _a[_i];
                        if (name === acc.name) {
                            return acc;
                        }
                    }
                    return {
                        name: 'user acc not found',
                        points: 0
                    };
                };
                FGPService.prototype.updateUserAccount = function (name, points) {
                    for (var _i = 0, _a = this.userAccounts; _i < _a.length; _i++) {
                        var acc = _a[_i];
                        if (name === acc.name) {
                            acc.points = points;
                        }
                    }
                };
                FGPService.prototype.persistUserAccounts = function () {
                    console.error('not implemented yet');
                };
                FGPService.prototype.pushChoice = function (user, choice, points) {
                    this.choices.push({
                        name: name,
                        choice: choice,
                        points: points
                    });
                };
                FGPService.prototype.persistChoices = function () {
                    console.error('not implemented yet');
                };
                FGPService.prototype.getChoiceEmitter = function () {
                    return this.onChoiceMade;
                };
                __decorate([
                    core_3.Output(), 
                    __metadata('design:type', core_2.EventEmitter)
                ], FGPService.prototype, "onChoiceMade", void 0);
                FGPService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], FGPService);
                return FGPService;
            })();
            exports_1("FGPService", FGPService);
        }
    }
});
