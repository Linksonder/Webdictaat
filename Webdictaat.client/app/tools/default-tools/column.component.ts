import { Component, OnInit } from '@angular/core';

declare var $: JQueryStatic;

@Component({
    selector: "wd-column",
    template: "<div  id='wd-columnn' class='wd-component wd-row'><div class='wd-flex-1 wd-container'></div><div class='wd-flex-1 wd-container'></div></div>"
})
export class ColumnComponent {

    private content: string;

    public ngOnInit(): void {
        $('#wd-component')
            .draggable({
                cursorAt: { left: 0, top: 0 },
                helper: "clone",
                connectToSortable: ".wd-container"
            });
    }

}

