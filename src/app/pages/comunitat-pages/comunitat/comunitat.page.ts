import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-comunitat',
  templateUrl: './comunitat.page.html',
  styleUrls: ['./comunitat.page.scss'],
})
export class ComunitatPage implements OnInit {

  constructor(private dataService : DataService) { }

  ngOnInit() {
  }

  noDisponibleToast(){
    this.dataService.presentToast("Actualment no disponible");
  }

}
