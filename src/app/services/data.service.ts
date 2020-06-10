import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MenuItem, Usuari } from 'src/interfaces/interfaces';
import { ToastController, LoadingController } from '@ionic/angular';
import { DEV_ENDPOINT, HEROKU_ENDPOINT } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {


  headers: HttpHeaders;
  usuari: Usuari;
  
  // prefix: string = DEV_ENDPOINT;
  prefix: string = HEROKU_ENDPOINT;

  constructor( private http : HttpClient, private toastController : ToastController,
               private loadingController : LoadingController) {   }

             
  setCredentialsHeaders(correuElectronic, password){
    this.headers = new HttpHeaders({Authorization: 'Basic '+btoa(correuElectronic + ':' + password)});
  }

  setUsuari(usuari){
    this.usuari = usuari;
  }

  getUsuari(){
    return this.usuari;
  }
  
  getUsuariId(){
    return this.usuari.id;
  }

  getHomeMenuItems () {
    return this.http.get<MenuItem []>('/assets/data/HomeMenuItems.json');
  }

  getRegistreSimpotomesMenuItems () {
    return this.http.get<MenuItem []>('/assets/data/RegistreSimptomesMenuItems.json');
  }

  getDadesRegistradesMenuItems () {
    return this.http.get<MenuItem[]>('/assets/data/DadesRegistradesMenuItems.json');
  }


  // GET
  async request <T> (endpoint){
    const loading = await this.loadingController.create({
      message: 'Carregant...',
    });

    await loading.present();

    endpoint = this.prefix + endpoint;


    return this.http.get<T>(endpoint, {headers: this.headers}); 
  }


  // POST
  async submit <T> (endpoint = '', object){
    endpoint = this.prefix + endpoint;

    const loading = await this.loadingController.create({
      message: 'Guardant...',
    });

    await loading.present();

    return this.http.post<T>(endpoint, object, {headers: this.headers});
  }

  // DELETE 
  async delete <T>(endpoint = ''){
    endpoint = this.prefix + endpoint;
     
    const loading = await this.loadingController.create({
      message: 'Eliminant...',
    });
  
    await loading.present();
  
    return this.http.delete<T>(endpoint, {headers: this.headers});
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


}
