import { Component, OnInit } from '@angular/core';
import { Nota } from 'src/interfaces/interfaces';
import { AlertController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  constructor(public alertCtrl : AlertController, private dataService : DataService) { }

  // FIXME: AÑADIR LO DE CARGAR DINAMICAMENTE LA LISTA CUANDO HAY MUCHOS ELEMENTOS
  notes : Nota [] = [];

  // FIXME:  Es necessar l'id del usuari
  endpoint : string = '/api/v1/notes';

  ngOnInit() {
    this.dataService.request(`${this.endpoint}/1`, this.notes);
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
      id: null,
      usuari: 1,
      descripcio : nota,
      data: new Date().toISOString()
    }

    this.dataService.submit(this.endpoint, notaAuxiliar, this.notes);

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
            
            let endpoint = `${this.endpoint}/${position}`;
            this.dataService.delete(endpoint);
          }
        }
      ]
    });

    await confirmarEliminarAlert.present();

  }

}
