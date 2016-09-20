import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { DictaatComponent } from './dictaat.component';
import { DictaatEntryComponent } from './dictaat-entry.component';


@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [DictaatComponent, DictaatEntryComponent],
    exports: [DictaatComponent, DictaatEntryComponent]
})
export class DictaatModule{ }

