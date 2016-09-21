import { Component, OnInit, Input } from '@angular/core';

import { PagesService} from './pages.service';
import { Dictaat } from '../models/dictaat';
import { Page } from '../models/page';
import { FilePreviewService } from '../services/file-preview.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
    selector: "wd-pages",
    templateUrl: "./app/pages/pages.component.html",
    providers: [PagesService]
})
export class PagesComponent implements OnInit {

    public selectedFile;

    @Input()
    public dictaat: Dictaat;

    public newPage: Page;

    constructor(
        private pagesSevice: PagesService,
        private filePreviewService: FilePreviewService
     ) { }

    //event
    public ngOnInit(): void {
        
    }

    public createNewPage(): void {
        this.newPage = new Page();
    }

    public selectPage(page): void {
        this.filePreviewService.selectFile(this.dictaat.name, page);
    }

    public addPage(page): void {
        this.pagesSevice.addPage(page);

        this.newPage = null;
    }

}

