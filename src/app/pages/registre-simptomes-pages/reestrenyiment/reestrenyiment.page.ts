import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OptionItem } from 'src/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';
import { BristolPage } from '../bristol/bristol.page';
import { getCurrentDate } from 'src/app/helpers/utils';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reestrenyiment',
  templateUrl: './reestrenyiment.page.html',
  styleUrls: ['./reestrenyiment.page.scss'],
})
export class ReestrenyimentPage implements OnInit {

  afirmatiu: boolean;
  endpoint: string = '/api/v1/reestrenyiment';
  bristol: number;
  color: number;
  ultimCopVentre : OptionItem [] = [
    {id: 0, text: 'Avui', checked: false},
    {id: 1, text: 'Ahir', checked: false},
    {id: 2, text: 'Fa 2 dies', checked: false},
    {id: 3, text: 'Fa 3 dies', checked: false},
    {id: 4, text: 'Fa 4 dies', checked: false},
    {id: 5, text: 'Fa més de 5 dies', checked: false}
  ];

  constructor(private dataService: DataService, private router : Router,
              private modalController: ModalController) { }

  ngOnInit() {
  }

  async seleccionarEscalaBristol(){
    const modal = await this.modalController.create({
      component: BristolPage,
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();

    this.bristol = data.bristol;
  }

  resposta(event){
    this.afirmatiu = event;
  }

  async guardar (){
    let ultimCop = 0;
    this.ultimCopVentre.forEach(ultim => {
      if(ultim.checked){
        ultimCop = ultim.id;
      }
    })
    let reestrenyimentForm = {
      afirmatiu: this.afirmatiu,
      usuari: this.dataService.getUsuariId(),
      data: getCurrentDate(),
      escalaBristol: this.bristol,
      color: this.color,
      ultimCop: ultimCop
    };

    (await this.dataService.submit(this.endpoint, reestrenyimentForm)).subscribe(
      data => {
        this.dataService.loadingControllerDismiss();
        this.dataService.presentToast("Guardat amb èxit...");
        this.router.navigateByUrl("registre-simptomes");
      },
      error => {
        this.dataService.loadingControllerDismiss();
        this.dataService.presentToast("Error guardant...");
      }
    )
  }

}
