import { Component, Input, Output } from '@angular/core';

import { DictaatEntry } from '../models/dictaat-entry';

import { FilePreviewService } from '../services/file-preview.service';

@Component({
    selector: "wd-dictaat-entry",
    templateUrl: './app/dictaat/dictaat-entry.component.html',
    styleUrls: ["./app/dictaat/dictaat-entry.component.css"],
})
export class DictaatEntryComponent {

    @Input() public entry: Object;

    constructor(private filePreviewService: FilePreviewService) { }

    public showSub = false;

    public select(file): void {
        this.filePreviewService.selectFile(file);
    }

}
    
