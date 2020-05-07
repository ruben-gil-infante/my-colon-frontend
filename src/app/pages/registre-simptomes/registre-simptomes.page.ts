import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from 'src/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-registre-simptomes',
  templateUrl: './registre-simptomes.page.html',
  styleUrls: ['./registre-simptomes.page.scss'],
})
export class RegistreSimptomesPage implements OnInit {

  menuItems : Observable<MenuItem[]>;

  constructor( private dataService : DataService ) { }

  ngOnInit() {
    this.menuItems = this.dataService.getRegistreSimpotomesMenuItems();
  }

}
