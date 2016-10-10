﻿import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

//modules
import { GuiElementsModule } from '../gui-elements/gui-elements.module';


//components
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { PageComponent } from '../page/page.component';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';

@NgModule({
    imports: [BrowserModule, HttpModule, routing, GuiElementsModule],
    declarations: [AppComponent, PageComponent, NavMenuComponent],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
    bootstrap: [AppComponent]
})
export class AppModule {

}
