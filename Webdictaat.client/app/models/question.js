"use strict";
var QuestionAnswer = (function () {
    function QuestionAnswer() {
        this.IsCorrect = false;
    }
    QuestionAnswer.prototype.Toggle = function () {
        this.IsCorrect = !this.IsCorrect;
    };
    return QuestionAnswer;
}());
exports.QuestionAnswer = QuestionAnswer;
var Question = (function () {
    function Question() {
        this.Answers = [];
    }
    Question.prototype.AddAnswer = function () {
        this.Answers.push(new QuestionAnswer());
    };
    ;
    Question.prototype.RemoveAnswer = function (answer) {
        var index = this.Answers.indexOf(answer);
        this.Answers.splice(index, 1);
    };
    return Question;
}());
exports.Question = Question;
//# sourceMappingURL=question.js.map