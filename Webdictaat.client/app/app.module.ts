import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';


import { AppComponent } from './app.component';
import { DictatenComponent } from './dictaten/dictaten.component';
import { DictaatComponent } from './dictaat/dictaat.component';
import { DictaatEntryComponent } from './dictaat/dictaat-entry.component';

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [AppComponent, DictatenComponent, DictaatComponent, DictaatEntryComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}
