import { Component, OnInit, Input } from '@angular/core';

class Answer {
    public text: string;
    public isCorrect: boolean;
}

@Component({
    selector: "wd-multiple-choice",
    template: `
        <div class='wd-component'>
            <p>Question with id {{qid}}</p>

            <div *ngIf="selectedAnswer && selectedAnswer.isCorrect">
                {{selectedAnswer.text}} is correct!
            </div>

                <div *ngIf="selectedAnswer && !selectedAnswer.isCorrect">
                {{selectedAnswer.text}} is not correct.
                Feel free to try again!
            </div>

            <ul>
                <li *ngFor='let answer of answers' (click)="giveAnswer(answer)">
                    {{answer.text}}
                </li>
            </ul>
        </div>
    `
})
export class MultipleChoiceComponent {

    //question id
    @Input()
    public qid: string; 

    public question: string = "What is 1 + 1?";

    public answers: Answer[] = [];

    public selectedAnswer: Answer;

    public correctAnswer: Answer = { text: "2", isCorrect: true }; 

    constructor() {

        this.answers.push({ text: "1", isCorrect: false });
        this.answers.push(this.correctAnswer);
        this.answers.push({ text: "3", isCorrect: false });
        this.answers.push({ text: "4", isCorrect: false });

    }

    public giveAnswer(answer): void {
        this.selectedAnswer = answer;
    }

}

