import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Subject }    from 'rxjs/Subject';

import { DictaatEntry  } from '../models/dictaat-entry';
import { FileEntry } from '../models/file-entry';

@Injectable()
export class FilePreviewService {

    // Observable string sources
    private selectedFileSource = new Subject<FileEntry>();

    constructor(private http: Http) { }

    // Observable string streams
    public selectedFile$ = this.selectedFileSource.asObservable();

    private dictatenUrl = 'http://localhost:65418/file/';

    public selectFile(dictaatEntry: DictaatEntry): void {
        this.http.get(this.dictatenUrl + dictaatEntry.location)
            .toPromise()
            .then(response => {

                var file = new FileEntry();
                file.location = dictaatEntry.location;
                file.name = dictaatEntry.name;
                file.source = response.text();

                this.selectedFileSource.next(file);
            }).catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}