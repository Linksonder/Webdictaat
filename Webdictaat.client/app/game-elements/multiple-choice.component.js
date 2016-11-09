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
var Answer = (function () {
    function Answer() {
    }
    return Answer;
}());
var MultipleChoiceComponent = (function () {
    function MultipleChoiceComponent() {
        this.question = "What is 1 + 1?";
        this.answers = [];
        this.correctAnswer = { text: "2", isCorrect: true };
        this.answers.push({ text: "1", isCorrect: false });
        this.answers.push(this.correctAnswer);
        this.answers.push({ text: "3", isCorrect: false });
        this.answers.push({ text: "4", isCorrect: false });
    }
    MultipleChoiceComponent.prototype.giveAnswer = function (answer) {
        this.selectedAnswer = answer;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MultipleChoiceComponent.prototype, "questionId", void 0);
    MultipleChoiceComponent = __decorate([
        core_1.Component({
            selector: "wd-multiple-choice",
            template: "\n        <div class='wd-component'>\n            <p>Question with id {{questionId}}</p>\n\n            <div *ngIf=\"selectedAnswer && selectedAnswer.isCorrect\">\n                {{selectedAnswer.text}} is correct!\n            </div>\n\n                <div *ngIf=\"selectedAnswer && !selectedAnswer.isCorrect\">\n                {{selectedAnswer.text}} is not correct.\n                Feel free to try again!\n            </div>\n\n            <ul>\n                <li *ngFor='let answer of answers' (click)=\"giveAnswer(answer)\">\n                    {{answer.text}}\n                </li>\n            </ul>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], MultipleChoiceComponent);
    return MultipleChoiceComponent;
}());
exports.MultipleChoiceComponent = MultipleChoiceComponent;
//# sourceMappingURL=multiple-choice.component.js.map