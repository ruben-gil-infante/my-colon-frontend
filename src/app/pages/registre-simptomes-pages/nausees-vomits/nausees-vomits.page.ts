import { Component, OnInit } from '@angular/core';
import { OptionItem } from 'src/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';
import { getCurrentDate } from 'src/app/helpers/utils';


@Component({
  selector: 'app-nausees-vomits',
  templateUrl: './nausees-vomits.page.html',
  styleUrls: ['./nausees-vomits.page.scss'],
})
export class NauseesVomitsPage implements OnInit {

  usuari: number;
  endpoint: string = '/api/v1/vomits';
  afirmatiu: boolean = true;
  avui: boolean = false;

  nausees : OptionItem [] = [
    {id: 0, text: 'Un cop o dos al dia', checked: false}, 
    {id: 1, text: 'Més de dos cops al dia', checked: false}
  ];
  
  descripcioVomit : OptionItem [] = [
    {id: 0, text: 'Contingut alimentici', checked: false},
    {id: 1, text: 'Mucós', checked: false},
    {id: 2, text: 'Biliós (tonalitat verda)', checked: false},
    {id: 3, text: 'Hemàtic (presència de sang)', checked: false}
  ]

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.usuari = this.dataService.getUsuariId();
  }

  afirmatiuSeleccionat(event){
    this.afirmatiu = event;
  }

  avuiSeleccionat(event){
    this.avui = event;
  }


  async guardar(){
    if(this.nausees[0].checked && this.nausees[1].checked){
      this.dataService.presentToast("Nomes pots escollir una opcio a la pregunta 2...");
      return;
    }

    let auxNausees;
    this.nausees[0].checked ? auxNausees = 0 : auxNausees = 1;

    let auxDescripcioVomit = "";

    this.descripcioVomit.forEach(descripcio => {
      if(!descripcio.checked)
        auxDescripcioVomit += `${descripcio.id};`;
    });

    let vomit = {
      usuari: this.usuari,
      afirmatiu: this.afirmatiu,
      avui: this.avui,
      descripcio: auxDescripcioVomit,
      cops: auxNausees,
      data: getCurrentDate()
    };

    (await this.dataService.submit(this.endpoint, vomit)).subscribe(
      data => {
        this.dataService.loadingControllerDismiss();
        this.dataService.presentToast("Guardat amb èxit...");
      },
      error => {
        this.dataService.loadingControllerDismiss();
        this.dataService.presentToast("Error guardant...");
      }
    );

  }

}
