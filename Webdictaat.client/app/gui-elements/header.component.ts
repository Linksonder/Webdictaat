import { Component, OnInit } from '@angular/core';

declare var $: JQueryStatic;

@Component({
    selector: "wd-header",
    template: "<div class='wd-component'><h1>Header</h1></div>"
})
export class HeaderComponent {

    private content: string;

    public ngOnInit(): void {
        $('.wd-component').draggable({
            helper: "clone",
            connectToSortable: ".wd-container"
        });
    }

}

