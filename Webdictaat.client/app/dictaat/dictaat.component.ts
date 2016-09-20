import { Component,  OnInit, Input } from '@angular/core';
import { DictaatService } from './dictaat.service';
import { Dictaat } from '../models/dictaat';
import { DictaatEntryComponent } from './dictaat-entry.component';
import { FilePreviewService } from '../services/file-preview.service';

import { ActivatedRoute, Params } from '@angular/router';


@Component({
    selector: "wd-dictaat",
    templateUrl: "./app/dictaat/dictaat.component.html",
    styleUrls: ["./app/dictaat/dictaat.component.css"],
    providers: [DictaatService    ]
})
export class DictaatComponent implements OnInit {

    public dictaten = [];

    public selectedFile;

    @Input()
    public dictaatName: String;

    public dictaat: Dictaat;

    constructor(
        private dictaatService: DictaatService,
        private route: ActivatedRoute) { }

    //event
    public ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let name = params['dictaatName'];
            this.dictaatService.getDictaat(name)
                .then(dictaat => this.dictaat = dictaat);
        });
    }

    public goBack(): void {
        window.history.back();
    }
}

