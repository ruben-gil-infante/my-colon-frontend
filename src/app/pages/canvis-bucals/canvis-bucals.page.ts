import { Component, OnInit } from '@angular/core';
import { OptionItem, CanvisBucals } from 'src/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-canvis-bucals',
  templateUrl: './canvis-bucals.page.html',
  styleUrls: ['./canvis-bucals.page.scss'],
})
export class CanvisBucalsPage implements OnInit {

  simptomes : OptionItem [] = [
    {id: 0, text: 'Boca seca', checked: false},
    {id: 1, text: 'Llenga enblanquida', checked: false},
    {id: 2, text: 'Boca amb és sensibilitat o dolor', checked: false},
    {id: 3, text: 'Canvis en el gust', checked: false}
  ]

  form : CanvisBucals;

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

  enviarFormulari (){
    let simptomesEscollits = '';
    this.simptomes.forEach(simptoma => {
      if(simptoma.checked){
        simptomesEscollits += simptoma.id + ';';
      }
    })


    this.form = {
      afirmatiu: false,
      simptomes: simptomesEscollits,
      usuari: 1,
      data: new Date().toISOString()
    }

    this.dataService.submit(this.endpoint, this.form);
    
  }

}
