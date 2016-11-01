import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { DialogService } from '../services/dialog.service';
import { ToolParams } from '../models/tool-params';

declare var $: JQueryStatic;

@Component({
    selector: "wd-html",
    template: "<div id='page'></div><button class='btn btn-default' (click)='savePage()'>Save</button>",
})
export class HtmlComponent implements OnInit{

    public editableElements =  "p, span, h1, h2, h3, h4, h5";
    public containerElements = ".wd-container";

    @Input()
    public innerHTML: string;

    @Output()
    public pageEdited = new EventEmitter();

    private pageElement;

    constructor(private dialogService: DialogService) {
      
    }


    public ngOnInit(): void{

        this.pageElement = $('#page').html(this.innerHTML);

        this.enableContainers(this.pageElement);

        this.pageElement.find('.wd-container').find(this.editableElements)
            .attr("contenteditable", "true");
    }

    private enableContainers(element): void {

        element.find('.wd-container').sortable({
            connectWith: '.wd-container',
            cancel: this.editableElements,
            hoverClass: "ui-state-hover",
            beforeStop: this.onDrop
        });

    }

    private onDrop = (event: any, ui) => {

        var params: ToolParams = ui.item.data("params");

        if (params) {
            this.dialogService.showDialog(params.Title, params.TriggeredComponent);
            ui.item.replaceWith($(params.Template));
        }

        ui.item
            .removeAttr('style')
            .find(this.editableElements)
            .attr("contenteditable", "true");

        this.enableContainers(ui.item);

    }

    private savePage(): void {
        var htmlClone = this.pageElement.clone();
        htmlClone.find(this.editableElements).removeAttr("contenteditable");
        this.pageEdited.emit(htmlClone.html());
    }

     
}

