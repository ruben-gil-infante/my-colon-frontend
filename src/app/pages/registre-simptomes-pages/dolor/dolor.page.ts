import { Component, OnInit} from '@angular/core';
import { OptionItem } from 'src/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';
import { getCurrentDate } from 'src/app/helpers/utils';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dolor',
  templateUrl: './dolor.page.html',
  styleUrls: ['./dolor.page.scss'],
})
export class DolorPage implements OnInit {

  endpoint: string = '/api/v1/dolor';
  valor : number;
  localitzacio : string = "";
  afirmatiu: boolean = false;

  descriuDolor : OptionItem [] = [
    {id: 0, text: 'Opressiu', checked: false},
    {id: 1, text: 'Constant', checked: false},
    {id: 2, text: 'Ardent', checked: false},
    {id: 3, text: 'Còlic', checked: false},
    {id: 4, text: 'Penetrant', checked: false}
  ];

  apareixDolor : OptionItem [] = [
    {id: 0, text: 'En repòs', checked: false},
    {id: 1, text: 'En els canvis de posició', checked: false},
    {id: 2, text: 'Durant activitat física', checked: false}
  ];

  constructor(private dataService : DataService, private router : Router) { }

  ngOnInit() {
  }

  afirmatiuSeleccionat(event){
    this.afirmatiu = event;
  }

  valorDolorSeleccionat(event){
    this.valor = event;
  }

  async guardar(){  
    let auxDescripcio = "";
    this.descriuDolor.forEach(descripcio => {
      if(descripcio.checked){
        auxDescripcio += `${descripcio.id};`;
      }
    });

    let auxQuanApareix = "";
    this.apareixDolor.forEach(apareix => {
      if(apareix.checked){
        auxQuanApareix += `${apareix.id};`;
      }
    })

    let dolorForm = {
      afirmatiu: this.afirmatiu,
      localitzacio: this.localitzacio,
      valor: this.valor,
      descripcioDolor: auxDescripcio,
      quanApareixDolor: auxQuanApareix,
      data: getCurrentDate(),
      usuari: this.dataService.getUsuariId()
    };


    (await this.dataService.submit(this.endpoint, dolorForm)).subscribe(
      data => {
        this.dataService.loadingControllerDismiss();
        this.dataService.presentToast("Guardat amb èxit...");
        this.router.navigateByUrl("registre-simptomes");
      },
      error => {
        this.dataService.loadingControllerDismiss();
        this.dataService.presentToast("Error guardant...");
      }
    );

  }

}
