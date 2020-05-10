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

  // DELETE
  async delete (endpoint = ''){
    endpoint = this.endpointPrefix + endpoint;

    this.loadingAlert('Eliminant');

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
  async submit (endpoint = '', object){
    endpoint = this.endpointPrefix + endpoint;

    this.loadingAlert('Guardant les dades');

    this.http.post<any>(endpoint, object)
      .subscribe({
        next : data => {
          this.loadingController.dismiss();
          this.presentToast('Guardat amb èxit');
        },
        error: error =>{
          this.loadingController.dismiss();
          this.presentToast('Problemes amb el servidor');
        }
      });
  }

  async loadingAlert (msg){
    const loading = await this.loadingController.create({
      message: msg,
    });

    await loading.present();
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
