import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',  // Main selector
  templateUrl: './heroes.component.html',  // HTML Tempalte
  styleUrls: ['./heroes.component.css']  // Component css
})
export class HeroesComponent implements OnInit {   // Good to export component class so it can be imported elsewhere

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes: Hero[];

  selectedHero: Hero;

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  
  constructor(private heroService: HeroService) { }

  ngOnInit() {  // Used to put initialistation logic
    this.getHeroes();
  }

}
