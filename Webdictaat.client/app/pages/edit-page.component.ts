import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PagesService } from './pages.service';
import { Page } from '../models/page';

@Component({
    selector: "wd-edit-page",
    templateUrl: "http://localhost:3000/app/pages/edit-page.component.html",
    providers: [PagesService]
})
export class EditPageComponent implements OnInit {

    private page: Page;
    private dictaatName: string;

    private ckEditorConfig: Object;


    constructor(
        private route: ActivatedRoute,
        private pagesService: PagesService
    ) {
        this.ckEditorConfig = editorConfig;
    }

    public ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let name = params['pageName'];
            this.dictaatName = params['dictaatName'];
            this.pagesService.getPage(this.dictaatName, name)
                .then(page =>
                    this.page = page);
        });
    }

    public savePage(): void {
        this.pagesService.editPage(this.dictaatName, this.page)
            .then((page) =>this.page = page );

    }
}


var editorConfig = {
    toolbar: [
        { name: 'document', groups: ['mode', 'document', 'doctools'], items: ['Source'] },
        { name: 'clipboard', groups: ['clipboard', 'undo'], items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo'] },
        { name: 'editing', groups: ['find', 'selection', 'spellchecker'], items: ['Find', 'Replace', '-', 'SelectAll', '-', 'Scayt'] },
        '/',
        { name: 'basicstyles', groups: ['basicstyles', 'cleanup'], items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat'] },
        { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'], items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl', 'Language'] },
        { name: 'links', items: ['Link', 'Unlink', 'Anchor'] },
        { name: 'insert', items: ['Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe'] },
        '/',
        { name: 'styles', items: ['Styles', 'Format', 'Font', 'FontSize'] },
        { name: 'colors', items: ['TextColor', 'BGColor'] },
        { name: 'tools', items: ['Maximize', 'ShowBlocks'] },
        { name: 'others', items: ['-'] },
    ]
};