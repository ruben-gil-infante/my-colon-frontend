import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { getCurrentDate } from 'src/app/helpers/utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nutricio',
  templateUrl: './nutricio.page.html',
  styleUrls: ['./nutricio.page.scss'],
})
export class NutricioPage implements OnInit {

  endpoint : string = "/api/v1/nutricio";
  esmorzar : number;
  dinar : number;
  berenar : number;
  sopar : number;
  gotsAigua : number;



  constructor(private dataService : DataService, private router : Router) { }

  ngOnInit() {
  }

  guardarValorNutricio(event, tipus){
    switch(tipus){
      case 1:
        this.esmorzar = event;
        break;
      case 2:
        this.dinar = event;
        break;
      case 3:
        this.berenar = event;
        break;
      case 4:
        this.sopar = event;
        break;
    }
  }

  async enviarDades (){
    let nutricio = {
      esmorzar: this.esmorzar,
      dinar: this.dinar,
      berenar: this.berenar,
      sopar: this.sopar,
      gotsAigua: this.gotsAigua,
      usuari: this.dataService.getUsuariId(),
      data: getCurrentDate()
    };
    
    (await this.dataService.submit(this.endpoint, nutricio)).subscribe(
      data => {
        this.dataService.loadingControllerDismiss();
        this.dataService.presentToast('Guardat amb èxit');
        this.router.navigateByUrl("home");
      },
      error => {
        this.dataService.loadingControllerDismiss();
        this.dataService.presentToast('Error guardant...');
      }
    )
  }

}
