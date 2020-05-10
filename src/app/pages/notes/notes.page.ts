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
    this.endpoint = `/api/v1/notes/${this.usuariId}`
    this.carregarNotes();
  }

  async carregarNotes (){
    console.log(this.endpoint);

    (await this.dataService.request(this.endpoint)).subscribe(
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

  async guardarNota( nota ){
    let notaAuxiliar = {
      id: null,
      usuari: this.usuariId,
      descripcio : nota,
      data: new Date().toISOString()
    }

    this.dataService.submit(this.endpoint, notaAuxiliar).subscribe(
      data => {
        this.loadingController.dismiss();
        this.notes.push(...data);
        this.dataService.presentToast('Guardat amb èxit...');
      },
      error => {
        this.loadingController.dismiss();
        this.dataService.presentToast('Error guardant...');
      }
    )

  }

  // TODO: Acabar d'implementar el metode correctament
  // FIXME: Canviar el nom dels metodes a alertEliminarNota... alertGuardarNota...
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
            this.eliminarNota(position);
          }
        }
      ]
    });

    await confirmarEliminarAlert.present();

  }


  // FIXME: Fer lo dels canvis dels noms
  async elminarNota() {

  }


}
