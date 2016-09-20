import { Component, EventEmitter } from '@angular/core';

import { FilePreviewService } from '../services/file-preview.service';
import { FileEntry } from '../models/file-entry';

@Component({
    selector: "wd-file-preview",
    templateUrl: './app/file-preview/file-preview.component.html',
    styleUrls: ["./app/file-preview/file-preview.component.css"],
})
export class FilePreviewComponent {

    public selectedFile: FileEntry;

    constructor(private filePreviewService: FilePreviewService) {
        filePreviewService.selectedFile$.subscribe(
            file => this.GetFilePreview(file));
    }

    private GetFilePreview(file: FileEntry): void {
        this.selectedFile = file;
    }

    public closeFile(): void {
        this.filePreviewService.clearSelection();
    }
}

