import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  nom: string;
  primerCognom: string;
  segonCognom: string;
  correuElectronic: string;
  genere: string;
  edat: number;
  password: string;

  constructor(private dataService : DataService) { }

  ngOnInit() {
  }


  async registrarse(){
    console.log("Registrant usuari....");

    let usuariForm = {
      nom: this.nom,
      primerCognom: this.primerCognom,
      segonCognom: this.segonCognom,
      correuElectronic: this.correuElectronic,
      genere: this.genere,
      edat: this.edat,
      password: this.password
    };

    // FIXME: FER EL POST

  }

}
