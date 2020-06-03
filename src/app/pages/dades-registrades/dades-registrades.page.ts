import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-dades-registrades',
  templateUrl: './dades-registrades.page.html',
  styleUrls: ['./dades-registrades.page.scss'],
})
export class DadesRegistradesPage implements OnInit {

  constructor(private dataService : DataService) { }

  ngOnInit() {

  }

}
