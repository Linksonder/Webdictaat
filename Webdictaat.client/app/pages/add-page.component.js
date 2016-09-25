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
var pages_service_1 = require('./pages.service');
var page_1 = require('../models/page');
var router_1 = require('@angular/router');
var AddPageComponent = (function () {
    function AddPageComponent(pageService, route) {
        this.pageService = pageService;
        this.route = route;
        this.page = new page_1.Page();
        this.showModal = false;
        this.pageAdded = new core_1.EventEmitter();
    }
    //event
    AddPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.dictaatName = params['dictaatName'];
        });
    };
    AddPageComponent.prototype.add = function () {
        var _this = this;
        this.showModal = false;
        this.pageService.addPage(this.dictaatName, this.page)
            .then(function (page) {
            _this.page = new page_1.Page();
            _this.pageAdded.emit(page);
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AddPageComponent.prototype, "pageAdded", void 0);
    AddPageComponent = __decorate([
        core_1.Component({
            selector: "wd-add-page",
            styleUrls: ['./app/pages/add-page.component.css'],
            templateUrl: "./app/pages/add-page.component.html",
            providers: [pages_service_1.PagesService]
        }), 
        __metadata('design:paramtypes', [pages_service_1.PagesService, router_1.ActivatedRoute])
    ], AddPageComponent);
    return AddPageComponent;
}());
exports.AddPageComponent = AddPageComponent;
//# sourceMappingURL=add-page.component.js.map