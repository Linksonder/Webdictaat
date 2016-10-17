import { NgModule } from '@angular/core';

//components
import { HtmlComponent } from './html.component';
import { HeaderComponent } from './header.component';
import { TextComponent } from './text.component';
import { ColumnComponent } from './column.component';

@NgModule({
    declarations: [ColumnComponent,TextComponent, HeaderComponent, HtmlComponent],
    exports: [ColumnComponent, TextComponent, HeaderComponent, HtmlComponent]
})
export class GuiElementsModule {

}
