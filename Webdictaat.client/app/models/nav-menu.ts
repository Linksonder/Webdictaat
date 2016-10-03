import { PageSummary } from './page-summary';

export class NavMenu {
    title: string;
    subMenus: NavMenu[] = [];
    items: NavMenuItem[] = [];
    show: boolean = false;
}

export class NavMenuItem {
    public name: string;
    public url: string;
}