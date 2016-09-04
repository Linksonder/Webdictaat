import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'my-heroes',
    styleUrls: ['app/heroes.component.css'],
    templateUrl: 'app/heroes.component.html',
    providers: [HeroService]
})
export class HeroesComponent implements OnInit {
    
    public heroes: Hero[];
    public selectedHero: Hero;

    constructor(private heroService: HeroService, private router: Router) {  }

    public ngOnInit(): void {
        this.getHeroes();
    }

    private getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    public onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    public gotoDetail(): void {
        let link = ['/detail', this.selectedHero.id];
        this.router.navigate(link);
    }


}