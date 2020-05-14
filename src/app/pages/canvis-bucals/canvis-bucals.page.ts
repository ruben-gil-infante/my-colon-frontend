import { Component, OnInit } from '@angular/core';
import { OptionItem, CanvisBucals } from 'src/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-canvis-bucals',
  templateUrl: './canvis-bucals.page.html',
  styleUrls: ['./canvis-bucals.page.scss'],
})
export class CanvisBucalsPage implements OnInit {

  afirmatiu: boolean;
  
  simptomes : OptionItem [] = [
    {id: 0, text: 'Boca seca', checked: false},
    {id: 1, text: 'Llenga enblanquida', checked: false},
    {id: 2, text: 'Boca amb és sensibilitat o dolor', checked: false},
    {id: 3, text: 'Canvis en el gust', checked: false}
  ]

  endpoint : string = '';

  constructor(private dataService : DataService) { }

  ngOnInit() {
  }

  itemSeleccionat( id ){
    this.simptomes[id].checked = true;
  }

  itemDesSeleccionat( id ){
    this.simptomes[id].checked = false;
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
      data: this.dataService.getCurrentDate()
    };

    (await this.dataService.submit(this.endpoint, canvisBucalsForm)).subscribe(
      data => {
        this.dataService.loadingControllerDismiss();
        this.dataService.presentToast('Guardat amb èxit...');
      },
      error => {
        this.dataService.loadingControllerDismiss();
        this.dataService.presentToast('Error guardant...');
      }
    )
    
  }

}
