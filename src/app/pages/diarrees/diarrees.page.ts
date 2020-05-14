import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { PopoverController, ModalController } from '@ionic/angular';
import { PopoverItemComponent } from 'src/app/components/popover-item/popover-item.component';
import { PopoverItem } from 'src/interfaces/interfaces';
import { BristolPage } from '../bristol/bristol.page';

@Component({
  selector: 'app-diarrees',
  templateUrl: './diarrees.page.html',
  styleUrls: ['./diarrees.page.scss'],
})
export class DiarreesPage implements OnInit {

  endpoint: string = '/api/v1/diarrees'
  afirmatiu: boolean;
  escalaBristol: number;
  color: number = 1;
  vegades: number = 0;

  colorFemta: PopoverItem [] = [
    {id: 1, text: 'Marró'},
    {id: 2, text: 'Groc'},
    {id: 3, text: 'Verd'},
    {id: 4, text: 'Gris'},
    {id: 5, text: 'Vermell'},
    {id: 6, text: 'Negre'}
  ];

  constructor(private dataService : DataService, private popoverController : PopoverController,
              private modalController : ModalController) { }

  ngOnInit() {
  }

  resposta(event){
    this.afirmatiu = event;
  }

  colorSeleccionat(event){
    this.color = event;
    this.dataService.presentToast("Color seleccionat correctament...");
  }

  async seleccionarEscalaBristol(event){
    const modal = await this.modalController.create({
      component: BristolPage,
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();

    this.escalaBristol = data.bristol;
    
    this.dataService.presentToast("Esacala seleccionada correctament...");
  }

  async seleccionarColorFemta(event){
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


  async guardar(){

    let diarreesForm = {
      usuari: this.dataService.getUsuariId(),
      afirmatiu: this.afirmatiu,
      vegades: this.vegades,
      escalaBristol: this.escalaBristol,
      data: this.dataService.getCurrentDate(),
      color: this.color
    };

    (await this.dataService.submit(this.endpoint, diarreesForm)).subscribe(
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
