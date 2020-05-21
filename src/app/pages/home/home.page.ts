import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  menuItems : Observable<MenuItem[]>;
  nomPacient : string;

  constructor( private dataService : DataService, private modalController : ModalController) { }

  ngOnInit() {
    this.nomPacient = `${this.dataService.getUsuari().nom} ${this.dataService.getUsuari().primerCognom} ${this.dataService.getUsuari().segonCognom}`;
    this.menuItems = this.dataService.getHomeMenuItems();
  }
  
}

