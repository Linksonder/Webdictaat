
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';


@Component({
    selector: "wd-tools",

    template: `
        <div class="panel panel-success" >
            <div class="panel-heading" >
                Tools
            </div>
            <div class="panel-body" >
                <ul class="list-group" dnd-sortable-container [dropZones]="['page-zone']">
                    <li class="list-group-item" dnd-sortable [sortableIndex]="1" > een </li>
                    <li class="list-group-item" dnd-sortable [sortableIndex]="2" > twee </li>
                    <li class="list-group-item" dnd-sortable [sortableIndex]="3" > drie </li>
                    <li class="list-group-item" dnd-sortable [sortableIndex]="4" > vier </li>
                </ul>
            </div>
        </div>`
})
export class ToolsComponent  {


}

