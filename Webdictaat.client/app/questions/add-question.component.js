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
var question_service_1 = require('./question.service');
var question_1 = require('../models/question');
var router_1 = require('@angular/router');
var AddQuestionComponent = (function () {
    function AddQuestionComponent(zone, questionService, route) {
        this.zone = zone;
        this.questionService = questionService;
        this.route = route;
        this.questionAdded = new core_1.EventEmitter();
        this.zone.run(function () { });
    }
    //event
    AddQuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.question = new question_1.Question();
        this.route.params.forEach(function (params) {
            _this.dictaatName = params['dictaatName'];
        });
    };
    AddQuestionComponent.prototype.add = function () {
        var _this = this;
        this.questionService.addQuestion(this.dictaatName, this.question)
            .then(function (question) {
            _this.question = question;
            _this.questionAdded.emit(question);
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AddQuestionComponent.prototype, "questionAdded", void 0);
    AddQuestionComponent = __decorate([
        core_1.Component({
            selector: "wd-add-question",
            templateUrl: "./app/questions/add-question.component.html",
            providers: [question_service_1.QuestionService]
        }), 
        __metadata('design:paramtypes', [core_1.NgZone, question_service_1.QuestionService, router_1.ActivatedRoute])
    ], AddQuestionComponent);
    return AddQuestionComponent;
}());
exports.AddQuestionComponent = AddQuestionComponent;
//# sourceMappingURL=add-question.component.js.map