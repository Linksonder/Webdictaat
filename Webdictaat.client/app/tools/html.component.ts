import { Component, Input, Output, OnInit, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { DialogService } from '../services/dialog.service';
import { ToolParams } from '../models/tool-params';

declare var $: JQueryStatic;

@Component({
    selector: "wd-html",
    template: `
        <div id='page'>
            <html-outlet [html]="innerHTML" (afterCompile)="afterCompile()"></html-outlet>
        </div>
        <button class='btn btn-default' (click)='savePage()'>Save</button>
    `,
})
export class HtmlComponent implements OnInit{

    public editableElements =  "p, span, h1, h2, h3, h4, h5";
    public containerElements = ".wd-container";

    @Input()
    public innerHTML: string;

    @Output()
    public pageEdited = new EventEmitter();

    private pageElement : JQuery;

    constructor(private dialogService: DialogService, private changeDetector: ChangeDetectorRef) {}

    public ngOnInit(): void{
        this.pageElement = $('#page'); //.html(this.innerHTML);
    }

    public ngOnChanges() : void{
    }

    private onDrop = (event: any, ui) => {

        var callback = ui.item.data("callback");
        var component = this;

        if (callback) 
            callback(ui, function () {
                component.recompile();
            });
        
        ui.item
            .removeAttr('style')
            .find(this.editableElements)
            .attr("contenteditable", "true");

        this.enableContainers(ui.item);

        //we need to refresh the things
        
    }

    private compileHtml(html : string): void {
        this.innerHTML = html;
        this.changeDetector.detectChanges();
    }

    public afterCompile() {
        this.enableContainers(this.pageElement);
        this.pageElement.find('.wd-container').find(this.editableElements)
            .attr("contenteditable", "true");
    }

    private decompileHtml(): string {
        var pageObject: JQuery = this.pageElement.find("dynamic-html");
        var lin = $(this).attr('href'); //verwijderen van ng-reflect voor id's
        pageObject.find(".wd-game-component").empty(); //leeg maken van gecompileerde componenten
        pageObject.find(this.editableElements).removeAttr("contenteditable");
        var htmlString = pageObject.html();
        htmlString = htmlString.replace(/ng-reflect-(.+?)=/g, '[$1]=')
        return htmlString;
    }

    private recompile(): void {
        this.compileHtml(this.decompileHtml());
    }


    private savePage(): void {
        this.pageEdited.emit(this.decompileHtml());
    }

    private enableContainers(element): void {

        element.find('.wd-container').sortable({
            connectWith: '.wd-container',
            cancel: this.editableElements,
            hoverClass: "ui-state-hover",
            beforeStop: this.onDrop
        });
    }

     
}

