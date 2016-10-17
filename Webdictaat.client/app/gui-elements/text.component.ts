import { Component, OnInit } from '@angular/core';

declare var $: JQueryStatic;

@Component({
    selector: "wd-text",
    template: "<div class='wd-component'><p>Tekst</p></div>"
})
export class TextComponent {

    private content: string;

    public ngOnInit(): void {
        $('.wd-component').draggable({
            helper: "clone",
            connectToSortable: ".wd-container"
        });
    }

}

