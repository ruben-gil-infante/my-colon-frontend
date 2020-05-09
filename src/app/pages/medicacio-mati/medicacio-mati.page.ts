import { Component, OnInit } from '@angular/core';
import { Medicacio } from 'src/interfaces/interfaces';
import { AlertController, ModalController } from '@ionic/angular';
import { FormulariMedicacioPage } from '../formulari-medicacio/formulari-medicacio.page';

@Component({
  selector: 'app-medicacio-mati',
  templateUrl: './medicacio-mati.page.html',
  styleUrls: ['./medicacio-mati.page.scss'],
})
export class MedicacioMatiPage implements OnInit {

  medicacions : Medicacio [] = [
    {
      usuari: 1,
      dosi: '3mg dos cops al dia',
      nom: 'Pred Forte',
      forma: 1,
      data: new Date().toISOString()
    }
  ];

  constructor(private modalController : ModalController) { }

  ngOnInit() {
  }

  eliminarMedicacio(position){
    this.medicacions.splice(position, 1);
  }

  async afegirMedicacio() {
    const modal = await this.modalController.create({
      component: FormulariMedicacioPage,
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();

    this.medicacions.push ({
      usuari: 1,
      dosi: data.dosi,
      nom: data.nom,
      forma: data.forma.toString(),
      data: new Date().toISOString()
    })
  }
}


