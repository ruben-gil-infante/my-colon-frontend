import { Component, OnInit } from '@angular/core';
import { Medicacio } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-medicacio',
  templateUrl: './medicacio.page.html',
  styleUrls: ['./medicacio.page.scss'],
})


export class MedicacioPage implements OnInit {

  medicacioMati   : Medicacio [] = [];
  medicacioTarda  : Medicacio [] = [];
  medicacioNit    : Medicacio [] = [];

  constructor() { }

  ngOnInit() {
  }

  

}
