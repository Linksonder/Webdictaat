import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//components
import { AppComponent } from './app.component';
import { routing } from './app.routing';


@NgModule({
    imports: [BrowserModule,  routing],
    declarations: [ AppComponent ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
