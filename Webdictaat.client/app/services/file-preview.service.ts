﻿import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Subject }    from 'rxjs/Subject';

import { DictaatEntry  } from '../models/dictaat-entry';
import { FileEntry } from '../models/file-entry';

import { Dictaat } from '../models/dictaat';


@Injectable()
export class FilePreviewService {

    // Observable string sources
    private selectedFileSource = new Subject<FileEntry>();

    constructor(private http: Http) { }

    private selectedDictaat: Dictaat;


    // Observable string streams
    public selectedFile$ = this.selectedFileSource.asObservable();

    private dictatenUrl = 'http://localhost:65418/api/dictaat/';

    public selectFile(dictaatEntry: DictaatEntry): void {
        this.http.get(this.dictatenUrl + this.selectedDictaat.name + "/file/" + dictaatEntry.name)
            .toPromise()
            .then(response => {

                var file = new FileEntry();
                file.location = dictaatEntry.location;
                file.name = dictaatEntry.name;
                file.source = response.json().source;

                this.selectedFileSource.next(file);
            }).catch(this.handleError);
    }

    public selectDictaat(dictaat: Dictaat): void {
        this.selectedDictaat = dictaat;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}