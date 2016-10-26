import { NgModule } from '@angular/core';


//components
import { HtmlComponent } from './html.component';
import { HeaderComponent } from './default-tools/header.component';
import { TextComponent } from './default-tools/text.component';
import { ColumnComponent } from './default-tools/column.component';
import { MultipleChoiceToolComponent } from './game-tools/multiple-choice.component';

@NgModule({
    declarations: [ColumnComponent, TextComponent, HeaderComponent, HtmlComponent, MultipleChoiceToolComponent],
    exports: [ColumnComponent, TextComponent, HeaderComponent, HtmlComponent, MultipleChoiceToolComponent]
})
export class ToolsModule {

}
