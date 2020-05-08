import { Component, OnInit } from '@angular/core';
import { Nota } from 'src/interfaces/interfaces';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  constructor(public alertCtrl : AlertController) { }

  // FIXME: AÑADIR LO DE CARGAR DINAMICAMENTE LA LISTA CUANDO HAY MUCHOS ELEMENTOS
  notes : Nota [] = [];

  ngOnInit() {
  }

  async afegirNota(  ){
    const input = await this.alertCtrl.create({
      header: 'Nota',
      subHeader: 'Afegeixi el text per la nota:',
      mode: "ios",
      inputs: [
        {
          name: 'descripcio',
          type: 'textarea',
          placeholder: 'Descripció'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Guardar',
          handler: ( data ) => {
            console.log('Confirm Ok', data);
            this.guardarNota(data.descripcio);
          }
        }
      ]
    });

    await input.present();

  }

  guardarNota( nota ){
    let notaAuxiliar = {
      usuari: 1,
      descripcio : nota,
      data: new Date().toISOString()
    }

    this.notes.push(notaAuxiliar);
  }

  async eliminarNota( position ){

    const confirmarEliminarAlert = await this.alertCtrl.create({
      header: 'Estas segur?',
      subHeader: 'Confirma que vols eliminar la nota',
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
            this.notes.splice(position, 1);
          }
        }
      ]
    });

    await confirmarEliminarAlert.present();

  }

}
