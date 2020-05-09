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

  async afegirMedicacio() {
    const modal = await this.modalController.create({
      component: FormulariMedicacioPage,
      componentProps: {
        nombre: 'Fernando',
        pais: 'Costa Rica'
      }
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();

    console.log('Retorno del modal', data );
  }
}
