import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

declare var $: JQueryStatic;

@Component({
    selector: "wd-html",
    template: "<div id='page'></div><button class='btn btn-default' (click)='savePage()'>Save</button>"
})
export class HtmlComponent implements OnInit{

    public editableElements =  "p, span, h1, h2, h3, h4, h5";
    public containerElements = ".wd-container";

    @Input()
    public innerHTML: string;

    @Output()
    public pageEdited = new EventEmitter();

    private pageElement;

    private enableContainers(element): void {

        element.find('.wd-container').sortable({
            connectWith: '.wd-container',
            cancel: this.editableElements
        });

        element.droppable({
            hoverClass: "ui-state-hover",
            start: this.onDropStart,
            stop: this.onDropStop,
            receive: this.onDropRecieve,
            drop: this.onDrop
        });

    }
     

    public ngOnInit(): void{

        this.pageElement = $('#page').html(this.innerHTML);

        this.enableContainers(this.pageElement);

        this.pageElement.find('.wd-container').find(this.editableElements)
            .attr("contenteditable", "true");
    }


    private onDropStart(event, ui): void { }
    private onDropStop(event, ui): void { }
    private onDropRecieve(event, ui): void { }

    private onDrop = (event, ui) => {
         $(ui.draggable)
            .removeAttr('style')
            .find(this.editableElements)
            .attr("contenteditable", "true");

         this.enableContainers($(ui.draggable));

    }

    private savePage(): void {
        var htmlClone = this.pageElement.clone();
        htmlClone.find(this.editableElements).removeAttr("contenteditable");
        this.pageEdited.emit(htmlClone.html());
    }

     
}

