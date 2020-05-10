import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuItem } from 'src/interfaces/interfaces';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http : HttpClient, private toastController : ToastController,
               private loadingController : LoadingController) { }

  endpointPrefix = 'http://localhost:8080'; 

  getHomeMenuItems () {
    return this.http.get<MenuItem []>('/assets/data/HomeMenuItems.json');
  }

  getRegistreSimpotomesMenuItems () {
    return this.http.get<MenuItem []>('/assets/data/RegistreSimptomesMenuItems.json');
  }


  // GET --> cal implementar
  async request (endpoint, elementList){
    endpoint = this.endpointPrefix + endpoint;

    const loading = await this.loadingController.create({
      message: 'Carregant...',
    });

    await loading.present();

    this.http.get<any>(endpoint).subscribe({
      next: data => {
        console.log("Retrieved data", data);
        this.loadingController.dismiss();
      },
      error: error => {
        this.loadingController.dismiss();
        this.presentToast('Error carregant es dades');
      }
    })
  }

  // DELETE 
  // FIXME: Fer que es pugui eliminar passant el endpoint i el id
  async delete (endpoint = ''){
    endpoint = this.endpointPrefix + endpoint;
    
    const loading = await this.loadingController.create({
      message: 'Carregant...',
    });

    await loading.present();

    this.http.delete(endpoint).subscribe({
      next : data => {
        this.loadingController.dismiss();
        this.presentToast('Eliminat amb èxit');
      },
      error : error => {
        this.loadingController.dismiss();
        this.presentToast('Error eliminant...');
      }
    });
  } 

  // POST
  async submit (endpoint = '', object, elementList = <any>[]){
    endpoint = this.endpointPrefix + endpoint;

    const loading = await this.loadingController.create({
      message: 'Guardant les dades...',
    });

    await loading.present();

    this.http.post<any>(endpoint, object)
      .subscribe({
        next : data => {
          this.loadingController.dismiss();
          this.presentToast('Guardat amb èxit');
          elementList.push(object);
        },
        error: error =>{
          this.loadingController.dismiss();
          this.presentToast('Problemes amb el servidor');
        }
      });
  }

  async loadingAlert (msg){

  }
  

  async presentToast(msg) {

    this.loadingController.dismiss();
    
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });

    toast.present();
  
  } 

}
