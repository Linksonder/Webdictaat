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
        var _this = this;
        this.editableElements = "p, span, h1, h2, h3, h4, h5";
        this.containerElements = ".wd-container";
        this.pageEdited = new core_1.EventEmitter();
        this.onDrop = function (event, ui) {
            $(ui.draggable)
                .removeAttr('style')
                .find(_this.editableElements)
                .attr("contenteditable", "true");
            _this.enableContainers($(ui.draggable));
        };
    }
    HtmlComponent.prototype.enableContainers = function (element) {
        element.find('.wd-container').sortable({
            connectWith: '.wd-container',
            cancel: this.editableElements
        });
        element.droppable({
            hoverClass: "ui-state-hover",
            start: this.onDropStart,
            stop: this.onDropStop,
            receive: this.onDropRecieve,
            drop: this.onDrop
        });
    };
    HtmlComponent.prototype.ngOnInit = function () {
        this.pageElement = $('#page').html(this.innerHTML);
        this.enableContainers(this.pageElement);
        this.pageElement.find('.wd-container').find(this.editableElements)
            .attr("contenteditable", "true");
    };
    HtmlComponent.prototype.onDropStart = function (event, ui) { };
    HtmlComponent.prototype.onDropStop = function (event, ui) { };
    HtmlComponent.prototype.onDropRecieve = function (event, ui) { };
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
            template: "<div id='page'></div><button class='btn btn-default' (click)='savePage()'>Save</button>"
        }), 
        __metadata('design:paramtypes', [])
    ], HtmlComponent);
    return HtmlComponent;
}());
exports.HtmlComponent = HtmlComponent;
//# sourceMappingURL=html.component.js.map