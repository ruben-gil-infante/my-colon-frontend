import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagecomunicationService {

  data: any = undefined;

  constructor() { }

  storageData<T>(data : T){
    this.data = data;
  }

  retrieveData<T>(){
    return this.data;
  }

}
