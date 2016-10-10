import { PageSummary } from './page-summary';

export class NavMenu {
    name: string;
    subMenus: NavMenu[] = [];
    menuItems: NavMenuItem[] = [];
    show: boolean = false;
}

export class NavMenuItem {
    public name: string;
    public url: string;
}