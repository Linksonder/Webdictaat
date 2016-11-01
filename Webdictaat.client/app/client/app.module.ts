import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

//modules
import { GameElementsModule } from '../game-elements/game-elements.module';

//components
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { PageComponent } from '../page/page.component';
import { HtmlOutlet } from '../core/html-outlet.directive';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';

@NgModule({
    imports: [BrowserModule, HttpModule, routing],
    declarations: [HtmlOutlet, AppComponent, PageComponent, NavMenuComponent],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
    bootstrap: [AppComponent]
})
export class AppModule {

}
