import { Component, OnInit } from '@angular/core';
import { Nota } from 'src/interfaces/interfaces';
import { AlertController, LoadingController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  constructor(public alertCtrl : AlertController, private dataService : DataService,
              private loadingController : LoadingController) {}

  // FIXME: AÑADIR LO DE CARGAR DINAMICAMENTE LA LISTA CUANDO HAY MUCHOS ELEMENTOS
  notes : Nota [] = [];

  // FIXME:  Es necessar l'id del usuari
  endpoint : string;
  usuariId : number;

  ngOnInit() {
    this.usuariId = this.dataService.getUsuariId();
    this.endpoint = `/api/v1/notes/`
    this.carregarNotes();
  }

  async carregarNotes (){
    let carregarEndpoint = this.endpoint + `${this.usuariId}`;

    (await this.dataService.request<Nota[]>(carregarEndpoint)).subscribe(
      data => {
        this.loadingController.dismiss();
        this.notes.push(...data);
      },  
      error => {
        this.loadingController.dismiss();
        this.dataService.presentToast('Error carregant les dades...');
      }
    )
  }

  // GUARDAR NOTA
  async alertGuardarNota(  ){
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
      usuari: this.usuariId,
      descripcio : nota,
      data: new Date().toISOString()
    };

    (await this.dataService.submit<Nota>(this.endpoint, notaAuxiliar)).subscribe(
      data => {
        this.loadingController.dismiss();
        this.notes.push(data);
        this.dataService.presentToast('Guardat amb èxit');
      },
      error => {
        this.loadingController.dismiss();
        this.dataService.presentToast('Error guardant...');
      }
    );

  }

  // ELIMINAR NOTA
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


  // FIXME: Fer lo dels canvis dels noms
  async eliminarNota( position ) {
    let endpoint = this.endpoint + this.notes[position].id;
    (await this.dataService.delete<Nota>(endpoint)).subscribe(
      data => {
        this.loadingController.dismiss();
        this.notes.splice(position, 1);
        this.dataService.presentToast('Eliminat amb èxit');
      },
      error => {
        this.loadingController.dismiss();
        this.dataService.presentToast('Error eliminant...');
      }
    )
  }


}
