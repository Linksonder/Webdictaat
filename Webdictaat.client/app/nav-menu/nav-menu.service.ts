import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Router} from '@angular/router';

//Nodig om een object om te toveren in een promise.

import { NavMenu, NavMenuItem } from '../models/nav-menu';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class NavMenuService {

    constructor(
        private http: Http,
        private router: Router) { }

    private menu: NavMenu; 

    public getNavMenu() : Promise<NavMenu>{
        if (this.menu != null) {
            return Promise.resolve(this.menu);
        }
        else{
            return this.http.get('/nav-menu.json')
                .toPromise()
                .then((response) => 
                    this.menu = response.json() as NavMenu
                ).catch(this.handleError);
        }
    }


    private deserialize(json, title = null): NavMenu {
        let navMenu: NavMenu = new NavMenu();
        navMenu.name = name;

        for (var key in json) {
            if (json[key].constructor === Array) {
                navMenu.subMenus.push(this.deserialize(json[key][0], key));
            }
            else {
                let item = new NavMenuItem();
                item.name = key;
                item.url = json[key].url ? json[key].url : key;
                //Kijken of het menu al open moet staan, kan netteer
                if (("/" + item.url) == this.router.url)
                    navMenu.show = true;
                navMenu.menuItems.push(item);
            }
        }

        return navMenu;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

} 