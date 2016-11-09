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
var question_service_1 = require('../../questions/question.service');
var MultipleChoiceToolComponent = (function () {
    function MultipleChoiceToolComponent(questionsService) {
        this.questionsService = questionsService;
        this.template = "<wd-multiple-choice>";
    }
    /**
     * Omslagtige maar nodige manier om terug in de Angular2 context te komen.
        Nu kan ik nog wat dingen doen aanpassen voor ik de drop afrond.
     */
    MultipleChoiceToolComponent.prototype.ngOnInit = function () {
        var component = this;
        $('#wd-multiple-choice-tool').draggable({
            helper: "clone",
            connectToSortable: ".wd-container",
            start: function (e, ui) {
                ui.helper.data("callback", function (ui) {
                    component.onDrop(ui);
                });
            }
        });
    };
    MultipleChoiceToolComponent.prototype.onDrop = function (ui) {
        this.questionsService.ShowAddQuestionModal();
        this.questionsService.getQuestionAdded().subscribe(function (question) {
            ui.item.replaceWith("<wd-multiple-choice [questionId]='" + question.id + "' />");
        });
    };
    MultipleChoiceToolComponent = __decorate([
        core_1.Component({
            selector: "wd-multiple-choice-tool",
            template: "<div id='wd-multiple-choice-tool' class='wd-component'>Multiple choice</div>",
        }), 
        __metadata('design:paramtypes', [question_service_1.QuestionsService])
    ], MultipleChoiceToolComponent);
    return MultipleChoiceToolComponent;
}());
exports.MultipleChoiceToolComponent = MultipleChoiceToolComponent;
//# sourceMappingURL=multiple-choice.component.js.map