import { Component, OnInit } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { OptionItem } from 'src/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-reestrenyiment',
  templateUrl: './reestrenyiment.page.html',
  styleUrls: ['./reestrenyiment.page.scss'],
})
export class ReestrenyimentPage implements OnInit {

  afirmatiu: boolean;
  endpoint: string = '/api/v1/reestrenyiment';
  ultimCopVentre : OptionItem [] = [

    {id: 0, text: 'Avui', checked: false},
    {id: 1, text: 'Ahir', checked: false},
    {id: 2, text: 'Fa 2 dies', checked: false},
    {id: 3, text: 'Fa 3 dies', checked: false},
    {id: 4, text: 'Fa 4 dies', checked: false},
    {id: 5, text: 'Fa més de 5 dies', checked: false}
  ]

  ultimaFemtaEscalaBristol : number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  async guardar (){
    let reestrenyimentForm = {
      afirmatiu: this.afirmatiu,
      usuari: this.dataService.getUsuariId(),
      data: this.dataService.getCurrentDate()
    };

    (await this.dataService.submit(this.endpoint, reestrenyimentForm)).subscribe(
      data => {
        this.dataService.loadingControllerDismiss();
        this.dataService.presentToast("Guardat amb èxit...");
      },
      error => {
        this.dataService.loadingControllerDismiss();
        this.dataService.presentToast("Error guardant...");
      }
    )
  }

}
