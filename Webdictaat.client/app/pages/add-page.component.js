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
var page_1 = require('../models/page');
var AddPageComponent = (function () {
    function AddPageComponent() {
        this.pageReady = new core_1.EventEmitter();
    }
    //event
    AddPageComponent.prototype.ngOnInit = function () {
    };
    AddPageComponent.prototype.add = function () {
        this.pageReady.emit(this.page);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', page_1.Page)
    ], AddPageComponent.prototype, "page", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AddPageComponent.prototype, "pageReady", void 0);
    AddPageComponent = __decorate([
        core_1.Component({
            selector: "wd-add-page",
            templateUrl: "./app/pages/add-page.component.html"
        }), 
        __metadata('design:paramtypes', [])
    ], AddPageComponent);
    return AddPageComponent;
}());
exports.AddPageComponent = AddPageComponent;
//# sourceMappingURL=add-page.component.js.map