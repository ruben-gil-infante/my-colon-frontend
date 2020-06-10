import { Component, OnInit } from '@angular/core';
import { Nota } from 'src/interfaces/interfaces';
import { AlertController, LoadingController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { getCurrentDate } from 'src/app/helpers/utils';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  constructor(public alertCtrl : AlertController, private dataService : DataService) {}

  notes : Nota [] = [];
  endpoint : string = '/api/v1/notes/';

  ngOnInit() {
    this.carregarNotes();
  }

  async carregarNotes (){
    let carregarEndpoint = this.endpoint + `${this.dataService.getUsuariId()}`;

    (await this.dataService.request<Nota[]>(carregarEndpoint)).subscribe(
      data => {
        this.dataService.loadingControllerDismiss();
        this.notes.push(...data);
      },  
      error => {
        this.dataService.loadingControllerDismiss();
        this.dataService.presentToast('Error carregant les dades...');
      }
    )
  }

  // GUARDAR NOTA
  async alertGuardarNota(  ){
    const input = await this.alertCtrl.create({
      header: 'Nota',
      subHeader: 'Afegeixi el text per la nota:',
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
          handler: () => { }
        }, {
          text: 'Guardar',
          handler: ( data ) => {
            this.guardarNota(data.descripcio);
          }
        }
      ]
    });

    await input.present();

  }

  async guardarNota( nota ){
    let notaAuxiliar = {
      usuari: this.dataService.getUsuariId(),
      descripcio : nota,
      data: getCurrentDate()
    };

    (await this.dataService.submit<Nota>(this.endpoint, notaAuxiliar)).subscribe(
      data => {
        this.dataService.loadingControllerDismiss();
        this.notes.push(data);
        this.dataService.presentToast('Guardat amb èxit');
      },
      error => {
        this.dataService.loadingControllerDismiss();
        this.dataService.presentToast('Error guardant...');
      }
    );

  }

  async alertEliminarNota( position ){

    const confirmarEliminarAlert = await this.alertCtrl.create({
      header: 'Estas segur?',
      subHeader: 'Confirma que vols eliminar la nota',
      mode: "ios",
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => { }
        }, {
          text: 'Si',
          handler: ( data ) => {
            this.eliminarNota( position );
          }
        }
      ]
    });

    await confirmarEliminarAlert.present();

  }

  async eliminarNota( position ) {
    let endpoint = this.endpoint + this.notes[position].id;
    (await this.dataService.delete<Nota>(endpoint)).subscribe(
      data => {
        this.dataService.loadingControllerDismiss();
        this.notes.splice(position, 1);
        this.dataService.presentToast('Eliminat amb èxit');
      },
      error => {
        this.dataService.loadingControllerDismiss();
        this.dataService.presentToast('Error eliminant...');
      }
    )
  }


}
