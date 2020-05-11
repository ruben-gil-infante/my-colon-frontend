import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MenuItem } from 'src/interfaces/interfaces';
import { ToastController, LoadingController } from '@ionic/angular';
import { HOST_PREFIX } from "../helpers/constants";

@Injectable({
  providedIn: 'root'
})
export class DataService {


  usuariId : number;
  password : string;
  

  constructor( private http : HttpClient, private toastController : ToastController,
               private loadingController : LoadingController) { }

  
  setInformacioUsuari(usuariId, password){
    this.usuariId = usuariId;
    this.password = password;
  }

  getUsuariId(){
    return this.usuariId;
  }

  // TODO: Treure aquest metode
  getHomeMenuItems () {
    return this.http.get<MenuItem []>('/assets/data/HomeMenuItems.json');
  }

  // TODO: Treure aquest metode
  getRegistreSimpotomesMenuItems () {
    return this.http.get<MenuItem []>('/assets/data/RegistreSimptomesMenuItems.json');
  }


  // GET --> cal implementar
  async request <T> (endpoint){
    const loading = await this.loadingController.create({
      message: 'Carregant...',
    });

    await loading.present();

    endpoint = HOST_PREFIX + endpoint;


    return this.http.get<T>(endpoint); 
  }

  // DELETE 
  async delete <T>(endpoint = ''){
    endpoint = HOST_PREFIX + endpoint;
    
    const loading = await this.loadingController.create({
      message: 'Carregant...',
    });

    await loading.present();

    return this.http.delete<T>(endpoint);
  } 

  // POST
  async submit <T> (endpoint = '', object){
    endpoint = HOST_PREFIX + endpoint;

    const loading = await this.loadingController.create({
      message: 'Guardant les dades...',
    });

    await loading.present();

    return this.http.post<T>(endpoint, object);
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
