import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuItem } from 'src/interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http : HttpClient ) { }

  endpointPrefix = 'http://localhost:8080'; 

  getHomeMenuItems () {
    return this.http.get<MenuItem []>('/assets/data/HomeMenuItems.json');
  }


  getRegistreSimpotomesMenuItems () {
    return this.http.get<MenuItem []>('/assets/data/RegistreSimptomesMenuItems.json');
  }

  // FIXME: Add method to get and save items from the database
  submit (endpoint = '', object){
    endpoint = this.endpointPrefix + endpoint;
    this.http.post<any>(endpoint, object)
      .subscribe({
        error: error =>  console.error('Error guardant les dades', error)
      });
  }
  request (){

  }

}
