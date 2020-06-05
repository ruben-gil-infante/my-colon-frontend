import { Component, OnInit } from '@angular/core';
import { Dolor } from 'src/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';
import { DESCRIPCIO_DOLOR, APARICIO_DOLOR } from 'src/app/helpers/constants';
import { mapBooleanToString } from 'src/app/helpers/utils';


@Component({
  selector: 'app-dolor-registre',
  templateUrl: './dolor-registre.page.html',
  styleUrls: ['./dolor-registre.page.scss'],
})
export class DolorRegistrePage implements OnInit {

  endpoint: string;
  dades: Dolor [] = [];

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.endpoint = `/api/v1/dolor/${this.dataService.getUsuariId()}`;
    this.loadData();
  }

  async loadData () {
    (await this.dataService.request<Dolor[]>(this.endpoint)).subscribe(
      data => {
        this.dades = data;
        this.dataService.loadingControllerDismiss();
      },
      error => {
        this.dataService.loadingControllerDismiss();
        this.dataService.presentToast("Error carregant...");
      }
    );
  }

  mapDescripcioDolor(descripcio){
    descripcio = parseInt(descripcio);

    switch(descripcio){
      case DESCRIPCIO_DOLOR.OPRESSIU:
        return ' ▪ Opressiu';
      case DESCRIPCIO_DOLOR.CONSTANT:
        return ' ▪ Constant';
      case DESCRIPCIO_DOLOR.ARDENT:
        return ' ▪ Ardent';
      case DESCRIPCIO_DOLOR.COLIC:
        return ' ▪ Colic';
      case DESCRIPCIO_DOLOR.PENETRANT:
        return ' ▪ Pentrant';
    }
  }

  mapAparicioDolor(aparicio){
    aparicio = parseInt(aparicio);

    switch(aparicio){
      case APARICIO_DOLOR.REPOS:
        return ' ▪ En repòs';
      case APARICIO_DOLOR.CANVIS_DE_POSICIO:
        return ' ▪ En els canvis de posició';
      case APARICIO_DOLOR.REALITZANT_ACTIVITAT_FISICA:
        return ' ▪ Realitzant activitat física';
    }
  }

  mapBoolean(valor){
    return mapBooleanToString(valor);
  }

}
