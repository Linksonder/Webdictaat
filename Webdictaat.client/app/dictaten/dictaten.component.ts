import { Component, OnInit } from '@angular/core';
import { DictatenService } from './dictaten.service';
import { Dictaat } from '../models/dictaat';


@Component({
    selector: "wd-dictaten",
    templateUrl: "./app/dictaten/dictaten.component.html",
    styleUrls: ["./app/dictaten/dictaten.component.css"],
    providers: [DictatenService]
})
export class DictatenComponent implements OnInit {

    public dictaten = [];

    public selectedDictaat: Dictaat;

    constructor(private dictatenService: DictatenService) { }

    ngOnInit(): void {
        this.dictatenService.getDictaten()
            .then(dictaten =>
                this.dictaten = dictaten
            );
    }

    public onSelect(dictaat: Dictaat): void {
        this.selectedDictaat = dictaat;
    }

}

