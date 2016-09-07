import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DictatenService } from './dictaten.service';


@Component({
    selector: "wd-dictaten",
    templateUrl: "./app/dictaten/dictaten.component.html",
    styleUrls: ["./app/dictaten/dictaten.component.css"],
    providers: [DictatenService]
})
export class DictatenComponent implements OnInit {

    public dictaten = [];

    constructor(private dictatenService: DictatenService) { }
    
    ngOnInit(): void {
        this.dictatenService.getDictaten()
            .then(dictaten => this.dictaten = dictaten);
    } 
}
    
