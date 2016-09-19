import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

//Modules
import { DictaatModule } from './dictaat/dictaat.module';

//components
import { AppComponent } from './app.component';
import { DictatenComponent } from './dictaten/dictaten.component';
import { FilePreviewComponent } from './file-preview/file-preview.component';

import { FilePreviewService } from './services/file-preview.service';

@NgModule({
    imports: [BrowserModule, HttpModule, DictaatModule],
    declarations: [AppComponent, DictatenComponent, FilePreviewComponent],
    providers: [FilePreviewService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
