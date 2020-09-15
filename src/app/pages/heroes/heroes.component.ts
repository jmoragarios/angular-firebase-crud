import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  private heroes: HeroeModel[];
  private cargando: boolean = false;
  constructor( private heroesServices: HeroesService ) { }

  ngOnInit(): void {
    this.cargando = true;
    this.heroesServices.getHeroes()
        .subscribe( res => {
          this.heroes = res;
          this.cargando = false;
        });

  }

}
