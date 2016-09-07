"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var DictatenService = (function () {
    function DictatenService() {
    }
    DictatenService.prototype.getDictaten = function () {
        return Promise.resolve([
            { name: "PROG1", location: "root/change/prog1", lastChange: new Date("9/5/2016") },
            { name: "PROG4", location: "root/change/prog2", lastChange: new Date("12/6/2016") },
            { name: "PROG3", location: "root/change/prog3", lastChange: new Date("10/6/2016") },
        ]);
    };
    DictatenService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DictatenService);
    return DictatenService;
}());
exports.DictatenService = DictatenService;
//# sourceMappingURL=dictaten.service.js.map