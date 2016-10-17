import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';

//external libraries
import {CKEditorModule} from 'ng2-ckeditor';
import {DragulaModule, DragulaService} from 'ng2-dragula/ng2-dragula';

//modules
import { PagesModule } from '../pages/pages.module';
import { ToolsModule } from '../tools/tools.module';

//components
import { AppComponent } from './app.component';

import { AddDictaatComponent } from '../dictaten/add-dictaat.component';

import { DictatenComponent } from '../dictaten/dictaten.component';
import { FilePreviewComponent } from '../file-preview/file-preview.component';
import { DictaatComponent } from '../dictaat/dictaat.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { FilePreviewService } from '../services/file-preview.service';

import { EditPageComponent }  from '../pages/edit-page.component';


import { routing } from './app.routing';


@NgModule({
    imports: [
        DragulaModule, ToolsModule,
        BrowserModule, HttpModule, routing, PagesModule, FormsModule, CKEditorModule],
    declarations: [
        AddDictaatComponent,
        AppComponent, DictatenComponent, FilePreviewComponent, DictaatComponent, EditPageComponent
    ],
    providers: [FilePreviewService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
    bootstrap: [AppComponent]
})
export class AppModule {

}
