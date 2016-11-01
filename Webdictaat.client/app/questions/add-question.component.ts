import { Component, EventEmitter, Output, OnInit, NgZone  } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { QuestionService } from './question.service';
import { DictaatService } from '../services/dictaat.service';


import { Question } from '../models/question';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: "wd-add-question",
    templateUrl: "./app/questions/add-question.component.html",
    providers: [QuestionService]
})
export class AddQuestionComponent implements OnInit   {

    private dictaatName: string;

    public question: Question;
  
    @Output()
    public questionAdded = new EventEmitter();

    constructor(
        private zone: NgZone,
        private questionService: QuestionService,
        private route: ActivatedRoute
    ) {
        this.zone.run(() => { });
    }

    //event
    public ngOnInit(): void {
        this.question = new Question();
        this.route.params.forEach((params: Params) => {
            this.dictaatName = params['dictaatName'];
        });
    }

    public add(): void {
    
        this.questionService.addQuestion(this.dictaatName, this.question)
            .then(question => {
                this.question = question
                this.questionAdded.emit(question);
            });
    }
}

