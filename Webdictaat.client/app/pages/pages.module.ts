import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

//components
import { PagesComponent } from './pages.component';
import { AddPageComponent } from './add-page.component';

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [PagesComponent, AddPageComponent ],
    exports: [PagesComponent]
})
export class PagesModule {

}
