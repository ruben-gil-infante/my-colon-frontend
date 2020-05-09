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
  submit (endpoint = '', object){

    this.alertLoading();

    endpoint = this.endpointPrefix + endpoint;
    this.http.post<any>(endpoint, object)
      .subscribe({
        error: error =>  this.presentToast('Problemes amb el servidor')
      });
  }
  request (){

  }

  async alertLoading(){
    const loading = await this.loadingController.create({
      message: 'Guardant les dades...',
    });

    await loading.present();
  }

  async presentToast(msg) {
    this.loadingController.dismiss();

    const toast = await this.toastController.create({
      message: msg,
      duration: 1500
    });
    toast.present();
  }

 

}
