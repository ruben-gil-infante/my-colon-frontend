import { Component, OnInit } from '@angular/core';
import { Medicacio } from 'src/interfaces/interfaces';
import { ModalController, AlertController } from '@ionic/angular';
import { FormulariMedicacioPage } from '../formulari-medicacio/formulari-medicacio.page';

@Component({
  selector: 'app-medicacio',
  templateUrl: './medicacio.page.html',
  styleUrls: ['./medicacio.page.scss'],
})


export class MedicacioPage implements OnInit {

  medicacions     : Medicacio [] = [
    {
      usuari: 1,
      dosi: '3mg dos cops al dia',
      nom: 'Pred Forte',
      forma: 1,
      data: new Date().toISOString()
    }
  ];

  constructor(private modalController : ModalController,
              private alertController : AlertController) { }

  ngOnInit() {
  }

  segmentChanged(event){
    switch (event.detail.value){
      case 'mati': 
        this.mostrarMedicacioMati();
        break;
      case 'tarda':
        this.mostrarMedicacioTarda();
        break;
      case 'nit':
        this.mostrarMedicacioNit();
        break;
    }
  }

  mostrarMedicacioMati (){
    console.log("Mostrar medicacio mati");
  }

  mostrarMedicacioTarda (){
    console.log("Mostrar medicacio tarda");
  }

  mostrarMedicacioNit (){
    console.log("Mostrar medicacio nit");
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
