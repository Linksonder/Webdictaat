import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
//Nodig om een object om te toveren in een promise.
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class DialogService {

    private content: string;
    private subject: Subject<string> = new Subject<string>();

    constructor(private http: Http) {

    }

    public showDialog(content): void {
        this.content = content;
        this.subject.next(content);
    }

    public getContent(): Observable<string> {
        return this.subject.asObservable();
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}