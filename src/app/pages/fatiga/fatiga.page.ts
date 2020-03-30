import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fatiga',
  templateUrl: './fatiga.page.html',
  styleUrls: ['./fatiga.page.scss'],
})
export class FatigaPage implements OnInit {

  private valorSeleccionat : number;

  constructor() { }

  ngOnInit() {
  }

  pruebaCapturaValor ( event ){
    this.valorSeleccionat = event;
  }

}
