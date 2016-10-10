import { PageSummary } from './page-summary';

export class Dictaat {
    name: string;
    location: string;
    lastChange: Date;
    pages: PageSummary[];
    menu: NavMenu;
}

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