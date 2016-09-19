import { Component,  OnChanges, Input } from '@angular/core';
import { DictaatService } from './dictaat.service';
import { Dictaat } from '../models/dictaat';
import { DictaatEntryComponent } from './dictaat-entry.component';



@Component({
    selector: "wd-dictaat",
    templateUrl: "./app/dictaat/dictaat.component.html",
    styleUrls: ["./app/dictaat/dictaat.component.css"],
    providers: [DictaatService    ]
})
export class DictaatComponent implements OnChanges {

    public dictaten = [];

    public selectedFile;

    @Input()
    public dictaatName: String;

    public dictaat: Dictaat;

    constructor(private dictaatService: DictaatService) { }
    
    public ngOnChanges(): void {
        this.dictaatService.getDictaat(this.dictaatName)
            .then(dictaat => 
                this.dictaat = dictaat);
    }

}

