import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  /* NOTA: LOS INPUTS: SON CLASES ESPECIALIZADAS QUE HACEN RECIBIR INFORMACION DESDE AFUERA */
  /* COMUNICACION DEL PADRE AL HIJO */
  @Input() heroe: any = {};
  @Input() index: number;


  /* COMUNICACION DEL HIJO AL PADRE */
  @Output() heroeSeleccionado: EventEmitter<number>;


  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter();
  }


  ngOnInit() {
  }

  verHeroe() {
    console.log(this.index);
    // this.router.navigate(['/heroe', this.index]);
    // this.heroeSeleccionado.emit(this.index);
  }
}
