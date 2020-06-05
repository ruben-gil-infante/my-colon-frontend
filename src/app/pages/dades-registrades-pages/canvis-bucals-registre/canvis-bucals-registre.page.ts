import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { CanvisBucals } from 'src/interfaces/interfaces';
import { CANVIS_BUCALS_OPCIONS } from 'src/app/helpers/constants';
import { mapBooleanToString } from 'src/app/helpers/utils';
 
@Component({
  selector: 'app-canvis-bucals-registre',
  templateUrl: './canvis-bucals-registre.page.html',
  styleUrls: ['./canvis-bucals-registre.page.scss'],
})
export class CanvisBucalsRegistrePage implements OnInit {

  endpoint: string;
  dades: CanvisBucals [];

  constructor(private dataService : DataService) { 
    
  }

  ngOnInit() {
    this.endpoint = `/api/v1/canvisbucals/${this.dataService.getUsuariId()}`;
    this.loadData();
  }

  async loadData(){
    (await this.dataService.request<CanvisBucals[]>(this.endpoint)).subscribe(
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

  mapSimptoma( index ){
    index = parseInt(index);
    switch(index){
      case CANVIS_BUCALS_OPCIONS.BOCA_AMB_MES_SENSIBILITAT_O_DOLOR:
        return " ▪ Boca amb més sensibilitat o dolor";
      case CANVIS_BUCALS_OPCIONS.LLENGA_ENBLANQUIDA:
        return " ▪ Llengau enblanquida";
      case CANVIS_BUCALS_OPCIONS.BOCA_SECA:
        return " ▪ Boca seca";
      case CANVIS_BUCALS_OPCIONS.CANVIS_EN_EL_GUST:
        return " ▪ Canvis en el gust";
    }
  }

  mapBoolean(valor){
    return mapBooleanToString(valor);
  }

}
