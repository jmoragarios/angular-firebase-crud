import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HeroeModel[];
  
  constructor( private heroesServices: HeroesService ) { }

  ngOnInit(): void {

    this.heroesServices.getHeroes()
        .subscribe( res => {
          this.heroes = res;
        });

  }

  borrarHeroe( heroe: HeroeModel, i: number ){

    Swal.fire({
      title: 'Esta seguro?',
      text: `Esta seguro que desea borrar a ${ heroe.nombre }?`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( res => {

      if( res.value ){
        this.heroes.splice(i, 1);
        this.heroesServices.borrarHeroe(heroe.id).subscribe();
      }
    })
    
  }

}
