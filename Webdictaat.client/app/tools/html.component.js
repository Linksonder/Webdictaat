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
var HtmlComponent = (function () {
    function HtmlComponent() {
        this.editableElements = "p, span, h1, h2, h3, h4, h5";
        this.containerElements = ".wd-container";
        this.pageEdited = new core_1.EventEmitter();
    }
    HtmlComponent.prototype.ngOnInit = function () {
    };
    HtmlComponent.prototype.dropOnPage = function ($event) {
    };
    HtmlComponent.prototype.savePage = function () {
        var htmlClone = this.pageElement.clone();
        htmlClone.find(this.editableElements).removeAttr("contenteditable");
        this.pageEdited.emit(htmlClone.html());
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
            template: " \n          <div class=\"panel panel-success\">\n            <div class=\"panel-heading\">\n                Page\n            </div>\n            <div class=\"panel-body\" dnd-sortable-container [dropZones]=\"['page-zone']\">\n                <ul class=\"list-group\" >\n                    <li class=\"list-group-item\" dnd-sortable [sortableIndex]=\"6\" >zes</li>\n                    <li class=\"list-group-item\" dnd-sortable [sortableIndex]=\"7\" >zeven</li>\n                </ul>\n            </div>\n        </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], HtmlComponent);
    return HtmlComponent;
}());
exports.HtmlComponent = HtmlComponent;
//# sourceMappingURL=html.component.js.map