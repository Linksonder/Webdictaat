import { Component } from '@angular/core';
import { Dictaat } from '../models/dictaat';


@Component({
    selector: "wd-dictaten",
    templateUrl: "./app/dictaten/dictaten.component.html",
    styleUrls: [ "./app/dictaten/dictaten.component.css" ]
})
export class DictatenComponent {

    public dictaten: Dictaat[] = [
        { name: "PROG1", location: "root/change/prog1", lastChange: new Date("9/5/2016") },
        { name: "PROG2", location: "root/change/prog2", lastChange: new Date("12/6/2016") },
        { name: "PROG3", location: "root/change/prog3", lastChange: new Date("10/6/2016") },

    ];

}