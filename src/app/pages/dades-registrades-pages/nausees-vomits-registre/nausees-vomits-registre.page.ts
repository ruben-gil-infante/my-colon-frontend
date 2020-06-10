import { Component, OnInit, ɵConsole } from '@angular/core';
import { Vomits } from 'src/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';
import { mapBooleanToString } from 'src/app/helpers/utils';
import { NAUSEES, DESCRIPCIO_VOMIT } from 'src/app/helpers/constants';

@Component({
  selector: 'app-nausees-vomits-registre',
  templateUrl: './nausees-vomits-registre.page.html',
  styleUrls: ['./nausees-vomits-registre.page.scss'],
})
export class NauseesVomitsRegistrePage implements OnInit {

  endpoint: string;
  dades: Vomits [] = [];

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.endpoint = `/api/v1/vomits/${this.dataService.getUsuariId()}`;
    this.loadData();
  }

  async loadData (){
    (await this.dataService.request<Vomits[]>(this.endpoint)).subscribe(
      data => {
        this.dades = data;
        this.dataService.loadingControllerDismiss();
      },
      error => {
        this.dataService.presentToast("Error carregant...");
        this.dataService.loadingControllerDismiss();
      }
    );
  }

  mapBoolean(valor){
    return mapBooleanToString(valor);
  }

  mapCops(valor){
    valor = parseInt(valor);

    switch(valor){
      case NAUSEES.UN_COP_O_DOS_AL_DIA:
        return " ▪ Un cop o dos al dia";
      case NAUSEES.DOS_COPS_O_MES_AL_DIA:
        return " ▪ Dos cops o més al dia";
    }

    return "";
  }

  mapDescripcioVomit (descripcio){
    descripcio = parseInt(descripcio);

    switch(descripcio){
      case DESCRIPCIO_VOMIT.CONTINGUT_ALIMENTICI: 
        return " ▪ Contingut alimentici";
      case DESCRIPCIO_VOMIT.MUCOS:
        return " ▪ Mucós";
      case DESCRIPCIO_VOMIT.BILIOS:
        return " ▪ Biliós";
      case DESCRIPCIO_VOMIT.HEMATIC:
        return " ▪ Hemàtic (presència de sang)";
      default:
        return "";
    }
  }

}
