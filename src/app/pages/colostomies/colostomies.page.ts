import { Component, OnInit } from '@angular/core';
import { OptionItem } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-colostomies',
  templateUrl: './colostomies.page.html',
  styleUrls: ['./colostomies.page.scss'],
})
export class ColostomiesPage implements OnInit {
  tipusColostomia : OptionItem [] = [
    {id: 0, text: 'Colòstomia transversal', notChecked: true},
    {id: 1, text: 'Colòstomia ascendent', notChecked: true},
    {id: 2, text: 'Colòstomia descendent i sigmoide', notChecked: true},
  ]

  informacio : OptionItem [] = [
    {id: 0, text:'Cures de l`estoma', notChecked: true},
    {id: 1, text:'Buidatge i canvi de bossa col·lectora', notChecked: true},
    {id: 2, text:'Material', notChecked: true},
    {id: 3, text:'Irrigació de colostomia', notChecked: true},
    {id: 4, text:'Com actuo davant els problemes que em sorgeixen', notChecked: true}
  ]

  constructor() { }

  ngOnInit() {
  }

}
