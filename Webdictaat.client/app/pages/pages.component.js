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
var dictaat_1 = require('../models/dictaat');
var page_1 = require('../models/page');
var file_preview_service_1 = require('../services/file-preview.service');
var PagesComponent = (function () {
    function PagesComponent(pagesSevice, filePreviewService) {
        this.pagesSevice = pagesSevice;
        this.filePreviewService = filePreviewService;
    }
    //event
    PagesComponent.prototype.ngOnInit = function () {
    };
    PagesComponent.prototype.createNewPage = function () {
        this.newPage = new page_1.Page();
    };
    PagesComponent.prototype.selectPage = function (page) {
        this.filePreviewService.selectFile(this.dictaat.name, page);
    };
    PagesComponent.prototype.addPage = function (page) {
        this.pagesSevice.addPage(page);
        this.newPage = null;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', dictaat_1.Dictaat)
    ], PagesComponent.prototype, "dictaat", void 0);
    PagesComponent = __decorate([
        core_1.Component({
            selector: "wd-pages",
            templateUrl: "./app/pages/pages.component.html",
            providers: [pages_service_1.PagesService]
        }), 
        __metadata('design:paramtypes', [pages_service_1.PagesService, file_preview_service_1.FilePreviewService])
    ], PagesComponent);
    return PagesComponent;
}());
exports.PagesComponent = PagesComponent;
//# sourceMappingURL=pages.component.js.map