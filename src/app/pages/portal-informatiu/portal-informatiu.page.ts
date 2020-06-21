import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-portal-informatiu',
  templateUrl: './portal-informatiu.page.html',
  styleUrls: ['./portal-informatiu.page.scss'],
})
export class PortalInformatiuPage implements OnInit {

  informacio : string [] = [
    'Preparació de proves',
    'Dietas',
    'Informació detalla cd CCR',
    'Afrontament de la malaltia',
    'Teràpies alternatives'
  ]

  constructor(private dataService : DataService) { }

  ngOnInit() {
  }

  redireccionar(){
    this.dataService.presentToast("Actualment no disponible");
  }

}
