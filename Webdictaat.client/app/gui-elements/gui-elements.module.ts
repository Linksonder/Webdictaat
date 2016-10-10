import { NgModule } from '@angular/core';

//components
import { ArticleComponent } from './article.component';


@NgModule({
    declarations: [ArticleComponent],
    exports: [ArticleComponent]
})
export class GuiElementsModule {

}
