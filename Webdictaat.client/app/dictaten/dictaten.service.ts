import { Injectable } from '@angular/core';
import { Dictaat } from '../models/dictaat';

@Injectable()
export class DictatenService {

    public getDictaten(): Promise<Dictaat[]> {
        return Promise.resolve([
            { name: "PROG1", location: "root/change/prog1", lastChange: new Date("9/5/2016") },
            { name: "PROG4", location: "root/change/prog2", lastChange: new Date("12/6/2016") },
            { name: "PROG3", location: "root/change/prog3", lastChange: new Date("10/6/2016") },
        ]);
    }

}