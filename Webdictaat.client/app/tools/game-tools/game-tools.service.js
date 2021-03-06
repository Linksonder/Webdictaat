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
//Nodig om een object om te toveren in een promise.
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
var GameToolsService = (function () {
    function GameToolsService(http) {
        this.http = http;
    }
    GameToolsService.prototype.addMultipleChoiceQuestion = function (pageName) {
        return this.http.get('/pages/' + pageName + '.html')
            .toPromise()
            .then(function (response) { return response.text(); }).catch(this.handleError);
    };
    GameToolsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    GameToolsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GameToolsService);
    return GameToolsService;
}());
exports.GameToolsService = GameToolsService;
//# sourceMappingURL=game-tools.service.js.map