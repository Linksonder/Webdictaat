import { Component, OnInit } from '@angular/core';
import { ToolParams } from '../../models/tool-params';
import { QuestionsService } from '../../questions/question.service';


declare var $: JQueryStatic;

@Component({
    selector: "wd-multiple-choice-tool",
    template: "<div id='wd-multiple-choice-tool' class='wd-component'>Multiple choice</div>",
})
export class MultipleChoiceToolComponent {

    private template: String = "<wd-multiple-choice>";

    constructor(private questionsService: QuestionsService) { }

    /**
     * Omslagtige maar nodige manier om terug in de Angular2 context te komen.
        Nu kan ik nog wat dingen doen aanpassen voor ik de drop afrond.
     */
    public ngOnInit(): void {
        var component = this;
        $('#wd-multiple-choice-tool').draggable({
            helper: "clone",
            connectToSortable: ".wd-container",
            start: function (e, ui) {
                ui.helper.data("callback", function(ui){
                    component.onDrop(ui)
                });
            }
        })
    }

    private onDrop(ui): void {
        this.questionsService.ShowAddQuestionModal();
        this.questionsService.getQuestionAdded().subscribe(question => {
            ui.item.replaceWith("<wd-multiple-choice id='" + question.id + "' />");
        });
       

    }
}

