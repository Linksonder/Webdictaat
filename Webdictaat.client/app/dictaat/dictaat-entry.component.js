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
var file_preview_service_1 = require('../services/file-preview.service');
var DictaatEntryComponent = (function () {
    function DictaatEntryComponent(filePreviewService) {
        this.filePreviewService = filePreviewService;
        this.showSub = false;
    }
    DictaatEntryComponent.prototype.select = function (file) {
        this.filePreviewService.selectFile(file);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DictaatEntryComponent.prototype, "entry", void 0);
    DictaatEntryComponent = __decorate([
        core_1.Component({
            selector: "wd-dictaat-entry",
            templateUrl: './app/dictaat/dictaat-entry.component.html',
            styleUrls: ["./app/dictaat/dictaat-entry.component.css"],
        }), 
        __metadata('design:paramtypes', [file_preview_service_1.FilePreviewService])
    ], DictaatEntryComponent);
    return DictaatEntryComponent;
}());
exports.DictaatEntryComponent = DictaatEntryComponent;
//# sourceMappingURL=dictaat-entry.component.js.map