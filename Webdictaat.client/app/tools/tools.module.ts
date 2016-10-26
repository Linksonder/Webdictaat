import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//components
import { HtmlComponent } from './html.component';
import { ToolsComponent } from './tools.component';

import { HeaderComponent } from './default-tools/header.component';
import { TextComponent } from './default-tools/text.component';
import { ColumnComponent } from './default-tools/column.component';

import { MultipleChoiceToolComponent } from './game-tools/multiple-choice.component';

import { ToastyModule } from 'ng2-toasty';
import { DndModule } from 'ng2-dnd';


@NgModule({
    imports: [ToastyModule.forRoot(), DndModule.forRoot(), BrowserModule],
    declarations: [ColumnComponent, TextComponent, HeaderComponent, HtmlComponent, MultipleChoiceToolComponent, ToolsComponent],
    exports: [ColumnComponent, TextComponent, HeaderComponent, HtmlComponent, MultipleChoiceToolComponent, ToolsComponent]
})
export class ToolsModule {

}
