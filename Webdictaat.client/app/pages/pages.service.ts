import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
//Nodig om een object om te toveren in een promise.

import { Page } from '../models/page';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class PagesService {

    constructor(private http: Http) { }

    private dictatenUrl = 'http://localhost:65418/api/dictaten/';

    public addPage(page: Page): void {

        console.log('adding new page!');
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}