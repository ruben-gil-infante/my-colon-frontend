import { Component, OnInit } from '@angular/core';
import { Medicacio } from 'src/interfaces/interfaces';
import { ModalController, AlertController, LoadingController } from '@ionic/angular';
import { FormulariMedicacioPage } from '../formulari-medicacio/formulari-medicacio.page';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-medicacio',
  templateUrl: './medicacio.page.html',
  styleUrls: ['./medicacio.page.scss'],
})


export class MedicacioPage implements OnInit {

  // FIXME: Afegir constants per indicar la franja de la medicina que s'esta guardant

  endpoint : string = '/api/v1/medicacio/';
  medicacions : Medicacio [] = [];
  franjaMedicacio : number = 1;  

  constructor(private modalController : ModalController, private alertController : AlertController,
              private dataService : DataService) { }

  ngOnInit() {
    this.recuperarMedicacions(1);
  }

  segmentChanged(event){
    switch (event.detail.value){
      case 'mati': 
        this.recuperarMedicacions(1);
        break;
      case 'tarda':
        this.recuperarMedicacions(2);
        break;
      case 'nit':
        this.recuperarMedicacions(3);
        break;
    }
  }

  async recuperarMedicacions( franja ){
    this.franjaMedicacio = franja;
    
    let recuperarEndpoint = this.endpoint + `${this.franjaMedicacio}/${this.dataService.getUsuariId()}`;

    (await this.dataService.request<Medicacio[]>(recuperarEndpoint)).subscribe(
      data => {
        this.dataService.loadingControllerDismiss();
        this.medicacions = [];
        this.medicacions.push(...data);
      },
      error => {
        this.dataService.loadingControllerDismiss();
        this.dataService.presentToast('Error carregant...');
      }
    )
  }

  

  async alertGuardarMedicacio() {
    const modal = await this.modalController.create({
      component: FormulariMedicacioPage,
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();

    let post_medicacio = {
      usuari: this.dataService.getUsuariId(),
      dosi: data.dosi,
      nom: data.nom,
      forma: data.forma,
      franja: this.franjaMedicacio,
      data: this.dataService.getCurrentDate()
    };

    (await this.dataService.submit<Medicacio>(this.endpoint, post_medicacio)).subscribe(
      data => {
        this.dataService.loadingControllerDismiss();
        this.medicacions.push(data);
        this.dataService.presentToast('Guardat amb èxit');
      },
      error => {
        this.dataService.loadingControllerDismiss();
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
        this.dataService.loadingControllerDismiss();
        this.dataService.presentToast('Eliminat amb èxit...');
        this.medicacions.splice(position, 1);
      },
      error => {
        this.dataService.loadingControllerDismiss();
        this.dataService.presentToast('Error eliminant...');
      }
    )
  }
  

}
