import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuItem } from 'src/interfaces/interfaces';
import { ToastController, LoadingController } from '@ionic/angular';
import { HOST_PREFIX } from "../helpers/constants";

@Injectable({
  providedIn: 'root'
})
export class DataService {


  usuariId : string;
  password : string;
  

  constructor( private http : HttpClient, private toastController : ToastController,
               private loadingController : LoadingController) { }

  
  setInformacioUsuari(usuariId, password){
    this.usuariId = usuariId;
    this.password = password;
  }

  getHomeMenuItems () {
    return this.http.get<MenuItem []>('/assets/data/HomeMenuItems.json');
  }

  getRegistreSimpotomesMenuItems () {
    return this.http.get<MenuItem []>('/assets/data/RegistreSimptomesMenuItems.json');
  }


  // GET --> cal implementar
  async request (endpoint, elementList){
    const loading = await this.loadingController.create({
      message: 'Carregant...',
    });

    await loading.present();

    endpoint = HOST_PREFIX + endpoint;


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
  async delete (endpoint = ''){
    endpoint = HOST_PREFIX + endpoint;
    
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
    endpoint = HOST_PREFIX + endpoint;

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

  async presentToast(msg) {

    this.loadingController.dismiss();
    
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });

    toast.present();
  
  } 

}
