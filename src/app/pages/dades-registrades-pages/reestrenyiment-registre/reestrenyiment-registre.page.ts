import { Component, OnInit } from '@angular/core';
import { Reestrenyiment } from 'src/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';
import { mapBooleanToString, mapColorToString } from 'src/app/helpers/utils';
import { ULTIM_COP_VENTRE } from 'src/app/helpers/constants';

@Component({
  selector: 'app-reestrenyiment-registre',
  templateUrl: './reestrenyiment-registre.page.html',
  styleUrls: ['./reestrenyiment-registre.page.scss'],
})
export class ReestrenyimentRegistrePage implements OnInit {

  endpoint: string;  
  dades: Reestrenyiment [] = [];

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.endpoint = `/api/v1/reestrenyiment/${this.dataService.getUsuariId()}`;
    this.loadData();
  }

  async loadData(){
    (await this.dataService.request<Reestrenyiment[]>(this.endpoint)).subscribe(
      data => {
        this.dades = data;
        this.dataService.loadingControllerDismiss();
      },
      error => {
        this.dataService.loadingControllerDismiss();
        this.dataService.presentToast("Error carregant");
      }
    );
  }

  mapBoolean(valor){
    return mapBooleanToString(valor);
  }

  mapUltimCop(ultimCop){
    switch(ultimCop){
      case ULTIM_COP_VENTRE.AVUI:
        return 'Avui';
      case ULTIM_COP_VENTRE.AHIR:
        return 'Ahir';
      case ULTIM_COP_VENTRE.FA_2_DIES:
        return 'Fa 2 dies';
      case ULTIM_COP_VENTRE.FA_2_DIES:
        return 'Fa 3 dies';
      case ULTIM_COP_VENTRE.FA_2_DIES:
        return 'Fa 4 dies';
      case ULTIM_COP_VENTRE.FA_MES_DE_5_DIES:
        return 'Fa més de 5 dies';
    }
  }

  mapColor(color){
    return mapColorToString(color);
  }

}
