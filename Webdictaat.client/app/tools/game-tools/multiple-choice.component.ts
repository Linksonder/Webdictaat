import { Component, OnInit } from '@angular/core';

declare var $: JQueryStatic;

@Component({
    selector: "wd-multiple-choice-tool",
    template: "<div id='wd-multiple-choice-tool' class='wd-component'>Multiple choice</div>"
})
export class MultipleChoiceToolComponent {

    public ngOnInit(): void {

        var template = "<wd-multiple-choice>";

        $('#wd-multiple-choice-tool').draggable({
            helper: "clone",
            connectToSortable: ".wd-container",
            start: function (e, ui) {
                ui.helper.data("template", template);
            }
          
        })



    }

}

