import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

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
      inputs: [
        {
          name: 'Càpsula',
          type: 'radio',
          label: 'Cápsula',
          value: 'Cápsula',
          checked: true
        },
        {
          name: 'Inhalador',
          type: 'radio',
          label: 'Inhalador',
          value: 'Inhalador'
        },
        {
          name: 'Ungüent',
          type: 'radio',
          label: 'Ungüent',
          value: 'Ungüent'
        },
        {
          name: 'Pegat',
          type: 'radio',
          label: 'Pegat',
          value: 'Pegat'
        },
        {
          name: 'Injecció',
          type: 'radio',
          label: 'Injecció',
          value: 'Injecció'
        },
        {
          name: 'Gotes',
          type: 'radio',
          label: 'Gotes',
          value: 'Gotes'
        },
        {
          name: 'Pastilla',
          type: 'radio',
          label: 'Pastilla',
          value: 'Pastilla'
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
