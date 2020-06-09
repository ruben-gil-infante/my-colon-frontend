import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { ModalController, AlertController } from '@ionic/angular';
import { LoginPage } from '../user-pages/login/login.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  menuItems : Observable<MenuItem[]>;
  nomPacient : string;

  constructor( private dataService : DataService, private router : Router,
               private alertController : AlertController) { }

  ngOnInit() {
    this.nomPacient = `${this.dataService.getUsuari().nom} ${this.dataService.getUsuari().primerCognom} ${this.dataService.getUsuari().segonCognom}`;
    this.menuItems = this.dataService.getHomeMenuItems();
  }

  async logout() {
    const alert = await this.alertController.create({
      header: 'Tancar la sessió?',
      mode: "ios",
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Si',
          cssClass: 'primary',
          handler: () => {
            this.dataService.setCredentialsHeaders(undefined, undefined);
            this.router.navigateByUrl("/login");
          }
        }
      ]
    });

    await alert.present();
  }
}

