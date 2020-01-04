import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute,
    // tslint:disable-next-line: align
    // tslint:disable-next-line: variable-name
    private _heroesService: HeroesService) {
    // tslint:disable-next-line: variable-name
    this.activatedRoute.params.subscribe(params => {
      // tslint:disable-next-line: no-string-literal
      // console.log(params['id']);

      // tslint:disable-next-line: no-string-literal
      this.heroe = this._heroesService.getHeroe(params['id']);
      console.log(this.heroe, 'DATOS DEL HEROE');
    });
  }


}
