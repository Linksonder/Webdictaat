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
var dialog_service_1 = require('../services/dialog.service');
var HtmlComponent = (function () {
    function HtmlComponent(dialogService, changeDetector) {
        var _this = this;
        this.dialogService = dialogService;
        this.changeDetector = changeDetector;
        this.editableElements = "p, span, h1, h2, h3, h4, h5";
        this.containerElements = ".wd-container";
        this.pageEdited = new core_1.EventEmitter();
        this.onDrop = function (event, ui) {
            var callback = ui.item.data("callback");
            var component = _this;
            if (callback)
                callback(ui, function () {
                    component.recompile();
                });
            ui.item
                .removeAttr('style')
                .find(_this.editableElements)
                .attr("contenteditable", "true");
            _this.enableContainers(ui.item);
            //we need to refresh the things
        };
    }
    HtmlComponent.prototype.ngOnInit = function () {
        this.pageElement = $('#page'); //.html(this.innerHTML);
    };
    HtmlComponent.prototype.ngOnChanges = function () {
    };
    HtmlComponent.prototype.compileHtml = function (html) {
        this.innerHTML = html;
        this.changeDetector.detectChanges();
    };
    HtmlComponent.prototype.afterCompile = function () {
        this.enableContainers(this.pageElement);
        this.pageElement.find('.wd-container').find(this.editableElements)
            .attr("contenteditable", "true");
    };
    HtmlComponent.prototype.decompileHtml = function () {
        var pageObject = this.pageElement.find("dynamic-html");
        var lin = $(this).attr('href'); //verwijderen van ng-reflect voor id's
        pageObject.find(".wd-game-component").empty(); //leeg maken van gecompileerde componenten
        pageObject.find(this.editableElements).removeAttr("contenteditable");
        var htmlString = pageObject.html();
        htmlString = htmlString.replace(/ng-reflect-(.+?)=/g, '[$1]=');
        return htmlString;
    };
    HtmlComponent.prototype.recompile = function () {
        this.compileHtml(this.decompileHtml());
    };
    HtmlComponent.prototype.savePage = function () {
        this.pageEdited.emit(this.decompileHtml());
    };
    HtmlComponent.prototype.enableContainers = function (element) {
        element.find('.wd-container').sortable({
            connectWith: '.wd-container',
            cancel: this.editableElements,
            hoverClass: "ui-state-hover",
            beforeStop: this.onDrop
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], HtmlComponent.prototype, "innerHTML", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], HtmlComponent.prototype, "pageEdited", void 0);
    HtmlComponent = __decorate([
        core_1.Component({
            selector: "wd-html",
            template: "\n        <div id='page'>\n            <html-outlet [html]=\"innerHTML\" (afterCompile)=\"afterCompile()\"></html-outlet>\n        </div>\n        <button class='btn btn-default' (click)='savePage()'>Save</button>\n    ",
        }), 
        __metadata('design:paramtypes', [dialog_service_1.DialogService, core_1.ChangeDetectorRef])
    ], HtmlComponent);
    return HtmlComponent;
}());
exports.HtmlComponent = HtmlComponent;
//# sourceMappingURL=html.component.js.map