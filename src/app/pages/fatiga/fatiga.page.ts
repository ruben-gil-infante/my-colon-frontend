import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-fatiga',
  templateUrl: './fatiga.page.html',
  styleUrls: ['./fatiga.page.scss'],
})
export class FatigaPage implements OnInit {

  usuari: number;
  endpoint: string = '/api/v1/fatiga';
  valorFatiga: number = 0;
  afirmatiu: boolean = true;

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.usuari = this.dataService.getUsuariId();
  }

  valorFatigaSeleccionat(event){
    this.valorFatiga = event;
  }

  afirmatiuSeleccionat(event){
    this.afirmatiu = event;
  }

  async guardar(){
    let fatigaForm = {
      usuari: this.usuari,
      puntuacio: this.valorFatiga,
      afirmatiu: this.afirmatiu
    } 

    ;(await this.dataService.submit(this.endpoint, fatigaForm)).subscribe(
      data => {
        this.dataService.loadingControllerDismiss();
        this.dataService.presentToast('Guardat amb èxit...');
      },
      error => {
        this.dataService.loadingControllerDismiss();
        this.dataService.presentToast('Error guardant...');
      }
    );

  }

}
