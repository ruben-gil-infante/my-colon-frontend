import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, LoadingController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Usuari } from 'src/interfaces/interfaces';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  correuElectronic: string;
  password : string;
  endpoint : string = '/api/v1/login/';

  constructor(private router : Router, private modalController : ModalController, private dataService : DataService) { }

  ngOnInit() {
    
  }

  async login(){
    this.dataService.setCredentialsHeaders(this.correuElectronic, this.password);

    (await this.dataService.request<Usuari>(this.endpoint)).subscribe(
      data => {
        this.dataService.loadingControllerDismiss();
        this.dataService.setUsuari(data);
        this.router.navigateByUrl('home');
      },
      error => {
        this.dataService.loadingControllerDismiss();
        if(error.status === 401){
          this.dataService.presentToast('Dades incorrectes...');
        }else{
          this.dataService.presentToast('Error de connexió');
        }
      }
    );
  };

  registrarse(event){
    this.router.navigateByUrl('registrarse');
  }
}
