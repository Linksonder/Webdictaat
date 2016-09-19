import { Component,  OnChanges, Input } from '@angular/core';
import { DictaatService } from './dictaat.service';
import { Dictaat } from '../models/dictaat';


@Component({
    selector: "wd-dictaat",
    templateUrl: "./app/dictaat/dictaat.component.html",
    styleUrls: ["./app/dictaat/dictaat.component.css"],
    providers: [DictaatService    ]
})
export class DictaatComponent implements OnChanges {

    public dictaten = [];

    @Input()
    public dictaatName: String;

    public dictaat: Dictaat;

    constructor(private dictaatService: DictaatService) { }
    
    ngOnChanges(): void {
        this.dictaatService.getDictaat(this.dictaatName)
            .then(dictaat => 
                this.dictaat = dictaat);
    }
}
    
