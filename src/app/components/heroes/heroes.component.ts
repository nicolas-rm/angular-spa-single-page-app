import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

/* OnInit: SE UTILIZA CUADNO LA PAGINA YA ESTA RENDERIZADA, CUANDO YA ESTA TRABAJADA, "CUANDO TODO YA ESTA EN ORDEN" */
export class HeroesComponent implements OnInit {


  heroes: Heroe[] = [];

  /* ESTANDAR DE LAS VARIABLES DE SERVICIOS */
  // tslint:disable-next-line: variable-name
  constructor(private _heroesServices: HeroesService, private router: Router) {
    // console.log('PRIMERO SE EJECUTA EL CONSTRUCTOR');
  }

  ngOnInit() {
    // console.log('SEGUNDO SE EJECUTA ngOnInit');
    this.heroes = this._heroesServices.getHeroes();
    // console.log(this.heroes, 'HEROES');
  }

  verHeroe(idx: number) {
    // console.log(idx, 'idx');
    this.router.navigate(['/heroe', idx]);
  }

}
