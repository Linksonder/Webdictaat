﻿import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';


import { AppComponent } from './app.component';
import { DictatenComponent } from './dictaten/dictaten.component';


@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [AppComponent, DictatenComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}
