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
    var core_1;
    var DevConfigService, FGPService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
                }
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
