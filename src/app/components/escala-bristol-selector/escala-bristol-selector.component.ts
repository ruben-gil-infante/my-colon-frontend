import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-escala-bristol-selector',
  templateUrl: './escala-bristol-selector.component.html',
  styleUrls: ['./escala-bristol-selector.component.scss'],
})
export class EscalaBristolSelectorComponent implements OnInit {

  ultimaFemtaEscalaBristol : number;

  constructor(private alertController : AlertController) { }


  ngOnInit() {}

  async seleccionarFemtaEscalaBristol(){

    const alert = await this.alertController.create({
      header: 'Selecciona un número',
      mode: "ios",
      inputs: [
        {
          type: 'number',
          name: 'escalaBristol',
          min: 1,
          max: 7,
        }
      ],
      buttons: [
        {
          text: 'Save',
          handler: ( event ) => {
            this.ultimaFemtaEscalaBristol = event.escalaBristol;
            this.enviarDadaSeleccionada();
          }
        }
      ]
    });

    alert.present();

  }

  enviarDadaSeleccionada () {

  }

}

