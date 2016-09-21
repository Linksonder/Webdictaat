import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Page } from '../models/page';

@Component({
    selector: "wd-add-page",
    templateUrl: "./app/pages/add-page.component.html"
})
export class AddPageComponent  {

    public selectedFile;

    @Input()
    public page: Page;

    @Output()
    public pageReady = new EventEmitter();


    //event
    public ngOnInit(): void {
        
    }

    public add(): void {
        this.pageReady.emit(this.page);
    }

}

