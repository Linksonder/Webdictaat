import { Component, OnInit } from '@angular/core';

declare var $: JQueryStatic;

@Component({
    selector: "wd-multiple-choice-tool",
    template: "<div id='wd-multiple-choice-tool' class='wd-component'>Multiple choice</div>",
})
export class MultipleChoiceToolComponent {

    private template: String = "<wd-multiple-choice>";


    public ngOnInit(): void {

        var data = {
            template: this.template,
            onDrop: function () {
                this.onDrop();
            }
        };

        $('#wd-multiple-choice-tool').draggable({
            helper: "clone",
            connectToSortable: ".wd-container",
            start: function (e, ui) {
                ui.helper.data("data", data);
            }
        })
    }
}

