import { Component, OnInit } from '@angular/core';
import { OptionItem } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-colostomies',
  templateUrl: './colostomies.page.html',
  styleUrls: ['./colostomies.page.scss'],
})
export class ColostomiesPage implements OnInit {
  tipusColostomia : OptionItem [] = [
    {id: 0, text: 'Colòstomia transversal', checked: true},
    {id: 1, text: 'Colòstomia ascendent', checked: true},
    {id: 2, text: 'Colòstomia descendent i sigmoide', checked: true},
  ]

  informacio : OptionItem [] = [
    {id: 0, text:'Cures de l`estoma', checked: true},
    {id: 1, text:'Buidatge i canvi de bossa col·lectora', checked: true},
    {id: 2, text:'Material', checked: true},
    {id: 3, text:'Irrigació de colostomia', checked: true},
    {id: 4, text:'Com actuo davant els problemes que em sorgeixen', checked: true}
  ]

  constructor() { }

  ngOnInit() {
  }

}
