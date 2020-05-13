import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import {FORMA_MEDICACIO} from '../../helpers/constants.js';

@Component({
  selector: 'app-formulari-medicacio',
  templateUrl: './formulari-medicacio.page.html',
  styleUrls: ['./formulari-medicacio.page.scss'],
})
export class FormulariMedicacioPage implements OnInit {

  constructor(private modalController : ModalController, 
              private alertController : AlertController,
              private toastController : ToastController) { }

  forma : string = '';
  dosi : string = '';
  nom : string = '';

  ngOnInit() {
  }


  guardarMedicacio(){
    if(this.validarDades()){
      this.modalController.dismiss({
        forma: this.forma,
        dosi: this.dosi,
        nom: this.nom
      });
    }
  }

  validarDades () {
    if (this.dosi == ''){
      this.showToastMessage('Introdueix la dosi');
      return false;

    }else if (this.nom == ''){
      this.showToastMessage('El nom es necessari');
      return false;
    }

    return true;
  }

  async showToastMessage(msg : string){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  async formaMedicacioSelector() {
    console.log("Forma medicacio selector")
    const alert = await this.alertController.create({
      header: 'Forma Medicació',
      mode: 'md',
      inputs: [
        {
          name: FORMA_MEDICACIO.CAPSULA.text,
          type: 'radio',
          label: FORMA_MEDICACIO.CAPSULA.text,
          value: FORMA_MEDICACIO.CAPSULA.id,
          checked: true
        },
        {
          name: FORMA_MEDICACIO.INHALADOR.text,
          type: 'radio',
          label: FORMA_MEDICACIO.INHALADOR.text,
          value: FORMA_MEDICACIO.INHALADOR.id
        },
        {
          name: FORMA_MEDICACIO.UNGUENT.text,
          type: 'radio',
          label: FORMA_MEDICACIO.UNGUENT.text,
          value: FORMA_MEDICACIO.UNGUENT.id
        },
        {
          name: FORMA_MEDICACIO.PEGAT.text,
          type: 'radio',
          label: FORMA_MEDICACIO.PEGAT.text,
          value: FORMA_MEDICACIO.PEGAT.id
        },
        {
          name: FORMA_MEDICACIO.INJECCIO.text,
          type: 'radio',
          label: FORMA_MEDICACIO.INJECCIO.text,
          value: FORMA_MEDICACIO.INJECCIO.id
        },
        {
          name: FORMA_MEDICACIO.GOTES.text,
          type: 'radio',
          label: FORMA_MEDICACIO.GOTES.text,
          value: FORMA_MEDICACIO.GOTES.id
        },
        {
          name: FORMA_MEDICACIO.PASTILLA.text,
          type: 'radio',
          label: FORMA_MEDICACIO.PASTILLA.text,
          value: FORMA_MEDICACIO.PASTILLA.id
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Seleccionar',
          handler: ( data ) => {
            this.forma = data;
          }
        }
      ]
    });

    await alert.present();
  }

}
