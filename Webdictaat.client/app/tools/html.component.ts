import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

declare var $: JQueryStatic;

@Component({
    selector: "wd-html",

    template: ` 
          <div class="panel panel-success">
            <div class="panel-heading">
                Page
            </div>
            <div class="panel-body" dnd-sortable-container [dropZones]="['page-zone']">
                <ul class="list-group" >
                    <li class="list-group-item" dnd-sortable [sortableIndex]="6" >zes</li>
                    <li class="list-group-item" dnd-sortable [sortableIndex]="7" >zeven</li>
                </ul>
            </div>
        </div>`
    //template: "<div id='page' dnd-droppable ></div><button class='btn btn-default' (click)='savePage()'>Save</button>"
})
export class HtmlComponent implements OnInit{

    public editableElements =  "p, span, h1, h2, h3, h4, h5";
    public containerElements = ".wd-container";

    @Input()
    public innerHTML: string;

    @Output()
    public pageEdited = new EventEmitter();

    private pageElement;

    public ngOnInit(): void{

    }

    public dropOnPage($event): void {
        
    }
    

    private savePage(): void {
        var htmlClone = this.pageElement.clone();
        htmlClone.find(this.editableElements).removeAttr("contenteditable");
        this.pageEdited.emit(htmlClone.html());
    }

     
}

