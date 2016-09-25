import { Component, EventEmitter, Output } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { PagesService } from './pages.service';
import { Page } from '../models/page';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: "wd-add-page",
    styleUrls: ['./app/pages/add-page.component.css'],
    templateUrl: "./app/pages/add-page.component.html",
    providers: [PagesService]
})
export class AddPageComponent  {

    public page: Page = new Page();
    public showModal: boolean = false;

    private dictaatName: string;

    @Output()
    public pageAdded = new EventEmitter();

    constructor(
        private pageService: PagesService,
        private route: ActivatedRoute
    ) { }

    //event
    public ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.dictaatName = params['dictaatName'];
        });
    }

    public add(): void {
        this.showModal = false;
        this.pageService.addPage(this.dictaatName, this.page)
            .then(page => {
                this.page = new Page();
                this.pageAdded.emit(page)
            });
    }

}

