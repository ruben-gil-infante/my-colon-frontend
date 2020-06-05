import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ModalController } from '@ionic/angular';
import { BristolPage } from '../../bristol/bristol.page';
import { getCurrentDate } from 'src/app/helpers/utils';
import { Router } from '@angular/router';


@Component({
  selector: 'app-diarrees',
  templateUrl: './diarrees.page.html',
  styleUrls: ['./diarrees.page.scss'],
})
export class DiarreesPage implements OnInit {

  endpoint: string = '/api/v1/diarrees'
  afirmatiu: boolean;
  escalaBristol: number;
  color: number;
  vegades: number;

  constructor(private dataService : DataService, private router : Router,
              private modalController : ModalController) { }

  ngOnInit() {
  }

  resposta(event){
    this.afirmatiu = event;
  }

  colorSeleccionat(event){
    this.color = event;
  }

  async seleccionarEscalaBristol(event){
    const modal = await this.modalController.create({
      component: BristolPage,
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();

    this.escalaBristol = data.bristol;
    
  }

  async guardar(){

    let diarreesForm = {
      usuari: this.dataService.getUsuariId(),
      afirmatiu: this.afirmatiu,
      vegades: this.vegades,
      escalaBristol: this.escalaBristol,
      data: getCurrentDate(),
      color: this.color
    };

    (await this.dataService.submit(this.endpoint, diarreesForm)).subscribe(
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
