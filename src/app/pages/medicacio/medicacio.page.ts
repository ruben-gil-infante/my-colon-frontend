import { Component, OnInit } from '@angular/core';
import { Medicacio } from 'src/interfaces/interfaces';
import { ModalController, AlertController } from '@ionic/angular';
import { FormulariMedicacioPage } from '../formulari-medicacio/formulari-medicacio.page';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-medicacio',
  templateUrl: './medicacio.page.html',
  styleUrls: ['./medicacio.page.scss'],
})


export class MedicacioPage implements OnInit {

  // FIXME: Afegir constants per indicar la franja de la medicina que s'esta guardant

  endpoint : string = '/api/v1/medicacio';

  medicacions : Medicacio [] = [
    {
      usuari: 1,
      dosi: '3mg dos cops al dia',
      nom: 'Pred Forte',
      forma: 1,
      franja: 1,
      data: new Date().toISOString()
    }
  ];

  formaMedicacio = [
    {
      id: 1,
      value: 'Cápsula'
    },
    {
      id: 2,
      value: 'Inhalador'
    },
    {
      id: 3,
      value: 'Ungüent'
    },
    {
      id: 4,
      value: 'Pegat'
    },
    {
      id: 5,
      value: 'Injeccio'
    },
    {
      id: 6,
      value: 'Gotes'
    },
    {
      id: 7,
      value: 'Pastilla'
    }
  ];

  constructor(private modalController : ModalController,
              private alertController : AlertController,
              private dataService : DataService) { }

  ngOnInit() {
  }

  segmentChanged(event){
    switch (event.detail.value){
      case 'mati': 
        console.log("Mostrar medicacions mati..."); 
        break;
      case 'tarda':
        console.log("Mostrar medicacions tarda...");
        break;
      case 'nit':
        console.log("Mostrar medicacions nit...");
        break;
    }
  }

  async afegirMedicacio() {
    const modal = await this.modalController.create({
      component: FormulariMedicacioPage,
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();

    let forma = this.formaToNumero(data.forma);

    let post_medicacio = {
      usuari: 1,
      dosi: data.dosi,
      nom: data.nom,
      forma: forma,
      franja: 1,
      data: new Date().toISOString()
    }

    this.dataService.submit(this.endpoint, post_medicacio);
    
  }

  formaToNumero (forma : string){
    return this.formaMedicacio.find(element => element.value == forma).id;
  }

  async eliminarMedicacio( position ){

    const confirmarEliminarAlert = await this.alertController.create({
      header: 'Estas segur?',
      subHeader: 'Confirma que vols eliminar la medicació',
      mode: "ios",
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Si',
          handler: ( data ) => {
            console.log('Confirm Ok', data);
            this.medicacions.splice(position, 1);
          }
        }
      ]
    });

    await confirmarEliminarAlert.present();

  }
  

}
