import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

//components
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { PageComponent } from '../page/page.component';

@NgModule({
    imports: [BrowserModule, HttpModule, routing],
    declarations: [AppComponent, PageComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}
