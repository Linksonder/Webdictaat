import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DialogService } from '../services/dialog.service';

@Component({
    selector: "wd-dialog",
    templateUrl: "./app/dialog/dialog.component.html",
})
export class DialogComponent implements OnInit {

    public isVisible: boolean;
    public content: string;

    constructor(private dialogService: DialogService, private changeDetector: ChangeDetectorRef) {  }

    public ngOnInit(): void {
        this.dialogService.getContent().subscribe((content: string) => {
            debugger;
            this.isVisible = true;
            this.content = content;
            this.changeDetector.detectChanges();

        });
    }

    public hideDialog(): void {
        this.isVisible = false;
    }
}

