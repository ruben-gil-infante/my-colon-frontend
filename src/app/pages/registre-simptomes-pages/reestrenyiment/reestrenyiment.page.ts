import { Component, OnInit } from '@angular/core';
import { AlertController, PopoverController, ModalController } from '@ionic/angular';
import { OptionItem, PopoverItem } from 'src/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';
import { PopoverItemComponent } from 'src/app/components/popover-item/popover-item.component';
import { BristolPage } from '../../bristol/bristol.page';
import { getCurrentDate } from 'src/app/helpers/utils';


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
  colorFemta: PopoverItem [] = [
    {id: 1, text: 'Marró'},
    {id: 2, text: 'Groc'},
    {id: 3, text: 'Verd'},
    {id: 4, text: 'Gris'},
    {id: 5, text: 'Vermell'},
    {id: 6, text: 'Negre'}
  ];

  constructor(private dataService: DataService, private popoverController : PopoverController,
              private modalController: ModalController) { }

  ngOnInit() {
  }

  async seleccionarColorFemta(){
    const popover = await this.popoverController.create({
      component: PopoverItemComponent,
      event: event,
      mode: 'ios',
      backdropDismiss: false,
      componentProps: {items: this.colorFemta}
    });

    await popover.present();

    const { data } = await popover.onWillDismiss();

    this.color = data.event.id;
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
      bristol: this.bristol,
      color: this.color,
      ultimCop: ultimCop
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
