import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { makePdf } from '../../helpers/report';

@Component({
  selector: 'app-dades-registrades',
  templateUrl: './dades-registrades.page.html',
  styleUrls: ['./dades-registrades.page.scss'],
})
export class DadesRegistradesPage implements OnInit {

  menuItems : Observable<MenuItem[]>;

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.menuItems = this.dataService.getRegistreSimpotomesMenuItems();
  }

  generarInforme(){
    makePdf();
  }

}
