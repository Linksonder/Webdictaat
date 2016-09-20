import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

//components
import { AppComponent } from './app.component';
import { DictatenComponent } from './dictaten/dictaten.component';
import { FilePreviewComponent } from './file-preview/file-preview.component';
import { DictaatComponent } from './dictaat/dictaat.component';

import { FilePreviewService } from './services/file-preview.service';

import { routing } from './app.routing';


@NgModule({
    imports: [BrowserModule, HttpModule, routing],
    declarations: [AppComponent, DictatenComponent, FilePreviewComponent, DictaatComponent],
    providers: [FilePreviewService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
