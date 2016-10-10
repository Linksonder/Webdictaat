import { Component } from '@angular/core';

@Component({
    selector: "wd-article",
    template: "<article class='yolo'><ng-content></ng-content></article>"
})
export class ArticleComponent {

    private content: string;

}

