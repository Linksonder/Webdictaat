import { Component, OnInit } from '@angular/core';

declare var $: JQueryStatic;

@Component({
    selector: "wd-text",
    template: `<div id='wd-text' dnd-sortable ><p>Tekst</p></div>`
})
export class TextComponent {

    private content: string;
    private template: string = "<p></p>";

    public ngOnInit(): void {

    }

}

