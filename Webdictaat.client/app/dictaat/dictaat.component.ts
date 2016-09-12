import { Component,  OnInit,  Input } from '@angular/core';
import { DictaatService } from './dictaat.service';
import { Dictaat } from '../models/dictaat';


@Component({
    selector: "wd-dictaat",
    templateUrl: "./app/dictaat/dictaat.component.html",
    styleUrls: ["./app/dictaat/dictaat.component.css"],
    providers: [DictaatService    ]
})
export class DictaatComponent implements OnInit {

    public dictaten = [];

    @Input()
    public dictaat: Dictaat;

    constructor(private dictaatService: DictaatService) { }
    
    ngOnInit(): void {
   
    } 
}
    
