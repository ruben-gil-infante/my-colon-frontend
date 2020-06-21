import { Component, OnInit } from '@angular/core';
import { OptionItem } from 'src/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';
import { getCurrentDate } from 'src/app/helpers/utils';
import { Router } from '@angular/router';


@Component({
  selector: 'app-canvis-bucals',
  templateUrl: './canvis-bucals.page.html',
  styleUrls: ['./canvis-bucals.page.scss'],
})
export class CanvisBucalsPage implements OnInit {

  endpoint: string = '/api/v1/canvisbucals';
  afirmatiu: boolean;
  
  simptomes : OptionItem [] = [
    {id: 0, text: 'Boca seca', checked: false},
    {id: 1, text: 'Llenga enblanquida', checked: false},
    {id: 2, text: 'Boca amb és sensibilitat o dolor', checked: false},
    {id: 3, text: 'Canvis en el gust', checked: false}
  ]

  constructor(private dataService : DataService, private router : Router) { }

  ngOnInit() {
  }

  itemSeleccionat( option ){
    this.simptomes[option.id].checked = true;
  }

  itemDesSeleccionat( option ){
    this.simptomes[option.id].checked = false;
  }

  async enviarFormulari (){
    let simptomesEscollits = '';
    this.simptomes.forEach(simptoma => {
      if(simptoma.checked){
        simptomesEscollits += simptoma.id + ';';
      }
    })

    let canvisBucalsForm = {
      afirmatiu: false,
      simptomes: simptomesEscollits,
      usuari: this.dataService.getUsuariId(),
      data: getCurrentDate()
    };

    (await this.dataService.submit(this.endpoint, canvisBucalsForm)).subscribe(
      data => {
        this.dataService.loadingControllerDismiss();
        this.dataService.presentToast('Guardat amb èxit...');
        this.router.navigateByUrl("registre-simptomes");
      },
      error => {
        this.dataService.loadingControllerDismiss();
        this.dataService.presentToast('Error guardant...');
      }
    )
    
  }

}
