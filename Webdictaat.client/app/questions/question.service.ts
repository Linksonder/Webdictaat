import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
//Nodig om een object om te toveren in een promise.

import { Question } from '../models/question';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class QuestionService {

    constructor(private http: Http) { }

    private dictatenUrl = 'http://localhost:65418/api/dictaten/';

    public addQuestion(dictaatName: String, question: Question): Promise<Question> {


        let url: string = this.dictatenUrl + dictaatName + '/questions';

        return this.http.post(url, question)
            .toPromise()
            .then(response =>
                response.json() as Question
            ).catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}