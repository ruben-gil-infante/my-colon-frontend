import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esdeveniments',
  templateUrl: './esdeveniments.page.html',
  styleUrls: ['./esdeveniments.page.scss'],
})
export class EsdevenimentsPage implements OnInit {

  endpoint: string = '/api/v1/esdeveniments';

  constructor() { }

  ngOnInit() {
  }

}
