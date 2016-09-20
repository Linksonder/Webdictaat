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
var http_1 = require('@angular/http');
var Subject_1 = require('rxjs/Subject');
var file_entry_1 = require('../models/file-entry');
var FilePreviewService = (function () {
    function FilePreviewService(http) {
        this.http = http;
        // Observable string sources
        this.selectedFileSource = new Subject_1.Subject();
        // Observable string streams
        this.selectedFile$ = this.selectedFileSource.asObservable();
        this.dictatenUrl = 'http://localhost:65418/api/dictaat/';
    }
    FilePreviewService.prototype.selectFile = function (dictaatEntry) {
        var _this = this;
        this.http.get(this.dictatenUrl + this.selectedDictaat.name + "/file/" + dictaatEntry.name)
            .toPromise()
            .then(function (response) {
            var file = new file_entry_1.FileEntry();
            file.location = dictaatEntry.location;
            file.name = dictaatEntry.name;
            file.source = response.json().source;
            _this.selectedFileSource.next(file);
        }).catch(this.handleError);
    };
    FilePreviewService.prototype.selectDictaat = function (dictaat) {
        this.selectedDictaat = dictaat;
    };
    FilePreviewService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    FilePreviewService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FilePreviewService);
    return FilePreviewService;
}());
exports.FilePreviewService = FilePreviewService;
//# sourceMappingURL=file-preview.service.js.map