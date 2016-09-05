import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DictatenComponent } from './dictaten/dictaten.component';


@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, DictatenComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}
