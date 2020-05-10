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

  // FIXME: Add method to get and save items from the database
  async submit (endpoint = '', object){
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
        },
        error: error =>{
          this.loadingController.dismiss();
          this.presentToast('Problemes amb el servidor');
        }
      });
  }
  request (){

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
