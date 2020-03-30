import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  menuItems : Observable<MenuItem[]>;

  constructor( private dataService : DataService) { }

  ngOnInit() {
    this.menuItems = this.dataService.getHomeMenuItems();
  }

}

