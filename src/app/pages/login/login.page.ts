import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, LoadingController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Usuari } from 'src/interfaces/interfaces';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  correuElectronic: string;
  password : string;
  endpoint : string = '/api/v1/login/';

  constructor(private modalController : ModalController, private dataService : DataService) { }

  ngOnInit() {
  }

  async login(){

    this.dataService.setCredentialsHeaders(this.correuElectronic, this.password);

    (await this.dataService.request<Usuari>(this.endpoint)).subscribe(
      data => {
        this.dataService.loadingControllerDismiss();
        this.dataService.setUsuari(data);
        this.modalController.dismiss({
          nomPacient: `${data.nom} ${data.primerCognom} ${data.segonCognom}`
        })
      },
      error => {
        console.log(error);
        this.dataService.loadingControllerDismiss();
        this.dataService.presentToast('Dades incorrectes...');
      }
    );
  }

  setHerokuPrefix(develop){
    if(develop)
      this.dataService.presentToast("Mode de desenolupadors");
    else
      this.dataService.presentToast("Mode client");
      
    this.dataService.setPrefix(develop);
  }
}
