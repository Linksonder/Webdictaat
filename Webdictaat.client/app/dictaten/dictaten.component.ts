import { Component, OnInit } from '@angular/core';
import { DictatenService } from './dictaten.service';
import { DictaatSummary } from '../models/dictaat-summary';
import { Headers, Http } from '@angular/http';


@Component({
    selector: "wd-dictaten",
    templateUrl: "./app/dictaten/dictaten.component.html",
    styleUrls: ["./app/dictaten/dictaten.component.css"],
    providers: [DictatenService]
})
export class DictatenComponent implements OnInit {

    public dictaten: DictaatSummary[];

    public selectedDictaat: DictaatSummary;

    constructor(private dictatenService: DictatenService, private httpService : Http) { }

    ngOnInit(): void {
        this.dictatenService.getDictaten()
            .then(dictaten =>
                this.dictaten = dictaten
            );
    }

    public onSelect(dictaat: DictaatSummary): void {
        this.selectedDictaat = dictaat;
    }

}

