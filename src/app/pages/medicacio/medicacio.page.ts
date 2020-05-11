import { Component, OnInit } from '@angular/core';
import { Medicacio } from 'src/interfaces/interfaces';
import { ModalController, AlertController, LoadingController } from '@ionic/angular';
import { FormulariMedicacioPage } from '../formulari-medicacio/formulari-medicacio.page';
import { DataService } from 'src/app/services/data.service';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-medicacio',
  templateUrl: './medicacio.page.html',
  styleUrls: ['./medicacio.page.scss'],
})


export class MedicacioPage implements OnInit {

  // FIXME: Afegir constants per indicar la franja de la medicina que s'esta guardant

  endpoint : string = '/api/v1/medicacio/';

  medicacions : Medicacio [] = [];


  constructor(private modalController : ModalController, private alertController : AlertController,
              private dataService : DataService, private loadingController : LoadingController) { }

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

  async alertGuardarMedicacio() {
    const modal = await this.modalController.create({
      component: FormulariMedicacioPage,
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();

    let post_medicacio = {
      usuari: 1,
      dosi: data.dosi,
      nom: data.nom,
      forma: data.forma,
      franja: 1,
      data: new Date().toISOString()
    };

    (await this.dataService.submit<Medicacio>(this.endpoint, post_medicacio)).subscribe(
      data => {
        this.loadingController.dismiss();
        this.medicacions.push(data);
        this.dataService.presentToast('Guardat amb èxit');
      },
      error => {
        this.loadingController.dismiss();
        this.dataService.presentToast('Error guardant...');
      }
    )
    
  }

  async alertEliminarMedicacio( position ){

    const confirmarEliminarAlert = await this.alertController.create({
      header: 'Estas segur?',
      subHeader: 'Confirma que vols eliminar la medicació',
      mode: "ios",
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
          }
        }, {
          text: 'Si',
          handler: ( data ) => {
            this.eliminarMedicacio(position);
          }
        }
      ]
    });

    await confirmarEliminarAlert.present();

  }

  async eliminarMedicacio(position){
    let endpoint = this.endpoint + this.medicacions[position].id;
    
    (await this.dataService.delete<Medicacio>(endpoint)).subscribe(
      data => {
        this.loadingController.dismiss();
        this.dataService.presentToast('Eliminat amb èxit...');
        this.medicacions.splice(position, 1);
      },
      error => {
        this.loadingController.dismiss();
        this.dataService.presentToast('Error eliminant...');
      }
    )
  }
  

}
