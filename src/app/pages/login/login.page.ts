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
        console.log(error);
        this.dataService.loadingControllerDismiss();
        this.dataService.presentToast('Dades incorrectes...');
      }
    );
  }
}
