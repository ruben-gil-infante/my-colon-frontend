import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MenuItem } from 'src/interfaces/interfaces';
import { ToastController, LoadingController } from '@ionic/angular';
import { HOST_PREFIX } from "../helpers/constants";

@Injectable({
  providedIn: 'root'
})
export class DataService {


  usuariId : number = 34; // FIXME: Eliminar, nomes per proves
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

  // FIXME: IMPLEMENTAR => local data service
  // TODO: Treure aquest metode
  getHomeMenuItems () {
    return this.http.get<MenuItem []>('/assets/data/HomeMenuItems.json');
  }

  // TODO: Treure aquest metode
  getRegistreSimpotomesMenuItems () {
    return this.http.get<MenuItem []>('/assets/data/RegistreSimptomesMenuItems.json');
  }


  // GET
  async request <T> (endpoint){
    const loading = await this.loadingController.create({
      message: 'Carregant...',
    });

    await loading.present();

    endpoint = HOST_PREFIX + endpoint;


    return this.http.get<T>(endpoint); 
  }


  // POST
  async submit <T> (endpoint = '', object){
    endpoint = HOST_PREFIX + endpoint;

    const loading = await this.loadingController.create({
      message: 'Guardant...',
    });

    await loading.present();

    return this.http.post<T>(endpoint, object);
  }

  // DELETE 
  async delete <T>(endpoint = ''){
    endpoint = HOST_PREFIX + endpoint;
     
    const loading = await this.loadingController.create({
      message: 'Eliminant...',
    });
  
    await loading.present();
  
    return this.http.delete<T>(endpoint);
  } 


  // TOAST
  async presentToast(msg) {

    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });

    toast.present();
  
  }

  // LOADING CONTROLLER
  async loadingControllerDismiss(){
    this.loadingController.dismiss();
  }

  getData(){
    return new Date().toISOString();
  }

}
