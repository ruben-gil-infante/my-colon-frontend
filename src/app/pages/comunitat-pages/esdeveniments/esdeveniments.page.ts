import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Esdeveniment } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-esdeveniments',
  templateUrl: './esdeveniments.page.html',
  styleUrls: ['./esdeveniments.page.scss'],
})
export class EsdevenimentsPage implements OnInit {

  endpoint: string = '/api/v1/esdeveniments';
  esdeveniments: Esdeveniment [] = [];

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.loadData();
  }

  async loadData(){
    (await this.dataService.request<Esdeveniment[]>(this.endpoint)).subscribe(
      data => {
        this.esdeveniments = data;
        this.dataService.loadingControllerDismiss();
      },
      erro => {
        this.dataService.loadingControllerDismiss();
        this.dataService.presentToast("Error carregant");
      }
    );
  }

}
