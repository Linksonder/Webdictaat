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
var router_1 = require('@angular/router');
var pages_service_1 = require('./pages.service');
var EditPageComponent = (function () {
    function EditPageComponent(route, pagesService) {
        this.route = route;
        this.pagesService = pagesService;
        this.ckEditorConfig = editorConfig;
    }
    EditPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var name = params['pageName'];
            _this.dictaatName = params['dictaatName'];
            _this.pagesService.getPage(_this.dictaatName, name)
                .then(function (page) {
                return _this.page = page;
            });
        });
    };
    EditPageComponent.prototype.savePage = function () {
        var _this = this;
        this.pagesService.editPage(this.dictaatName, this.page)
            .then(function (page) { return _this.page = page; });
    };
    EditPageComponent = __decorate([
        core_1.Component({
            selector: "wd-edit-page",
            templateUrl: "http://localhost:3000/app/pages/edit-page.component.html",
            providers: [pages_service_1.PagesService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pages_service_1.PagesService])
    ], EditPageComponent);
    return EditPageComponent;
}());
exports.EditPageComponent = EditPageComponent;
var editorConfig = {
    toolbar: [
        { name: 'document', groups: ['mode', 'document', 'doctools'], items: ['Source'] },
        { name: 'clipboard', groups: ['clipboard', 'undo'], items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo'] },
        { name: 'editing', groups: ['find', 'selection', 'spellchecker'], items: ['Find', 'Replace', '-', 'SelectAll', '-', 'Scayt'] },
        '/',
        { name: 'basicstyles', groups: ['basicstyles', 'cleanup'], items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat'] },
        { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'], items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl', 'Language'] },
        { name: 'links', items: ['Link', 'Unlink', 'Anchor'] },
        { name: 'insert', items: ['Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe'] },
        '/',
        { name: 'styles', items: ['Styles', 'Format', 'Font', 'FontSize'] },
        { name: 'colors', items: ['TextColor', 'BGColor'] },
        { name: 'tools', items: ['Maximize', 'ShowBlocks'] },
        { name: 'others', items: ['-'] },
    ]
};
//# sourceMappingURL=edit-page.component.js.map