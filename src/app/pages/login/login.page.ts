import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';
import { HOST_PREFIX } from '../../helpers/constants';
import { Usuari } from 'src/interfaces/interfaces';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuari : string;
  password : string;
  endpoint : string = '/api/v1/usuari/';

  constructor(private modalController : ModalController, private dataService : DataService) { }

  ngOnInit() {
  }

  async login( event ){

    let usuariEndpoint = this.endpoint + `${this.usuari}/${this.password}`;

    (await this.dataService.request<Usuari>(usuariEndpoint)).subscribe(
      data => {
        this.dataService.loadingControllerDismiss();
        this.dataService.setInformacioUsuari(data.id, data.password);
        this.modalController.dismiss({
          nomPacient: `${data.nom} ${data.primerCognom}`
        })
      },
      error => {
        this.dataService.loadingControllerDismiss();
        this.dataService.presentToast('Dades incorrectes...');
      }
    );
  }
}
