import { Injectable } from '@angular/core';
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

    // Observable string streams
    public selectedFile$ = this.selectedFileSource.asObservable();

    private dictatenUrl = 'http://localhost:65418/api/dictaat/';

    public selectFile(dictaatName: string, fileEntry: FileEntry): void {
        this.http.get(this.dictatenUrl + dictaatName + "/file/" + fileEntry.name)
            .toPromise()
            .then(response => {

               
                fileEntry.source = response.json().source;

                this.selectedFileSource.next(fileEntry);
            }).catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    

    public clearSelection(): void {
        this.selectedFileSource.next(null);
    }
}