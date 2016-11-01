import { Component, OnInit } from '@angular/core';
import { ToolParams } from '../../models/tool-params';

declare var $: JQueryStatic;

@Component({
    selector: "wd-multiple-choice-tool",
    template: "<div id='wd-multiple-choice-tool' class='wd-component'>Multiple choice</div>",
})
export class MultipleChoiceToolComponent {

    private template: String = "<wd-multiple-choice>";


    public ngOnInit(): void {

        var params: ToolParams = {
            Title: "Add Question",
            Template: "<wd-multiple-choice>",
            TriggeredComponent: "<wd-add-question>"
        };

        $('#wd-multiple-choice-tool').draggable({
            helper: "clone",
            connectToSortable: ".wd-container",
            start: function (e, ui) {
                ui.helper.data("params", params);
            }
        })
    }
}

