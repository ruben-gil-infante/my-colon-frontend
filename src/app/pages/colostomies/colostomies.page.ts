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
    {id: 1, text: 'Colòstomia ascendent', checked: false},
    {id: 2, text: 'Colòstomia descendent i sigmoide', checked: false},
  ];

  tipusSeleccionat : OptionItem = undefined;

  informacio : OptionItem [] = [
    {id: 0, text:'Cures de l`estoma', checked: false},
    {id: 1, text:'Buidatge i canvi de bossa col·lectora', checked: false},
    {id: 2, text:'Material', checked: true},
    {id: 3, text:'Irrigació de colostomia', checked: false},
    {id: 4, text:'Com actuo davant els problemes que em sorgeixen', checked: false}
  ];

  constructor() { }

  ngOnInit() {
  }

  tipusColostomiaSeleccionada (event){
    if(this.tipusSeleccionat == undefined){
      this.tipusSeleccionat = event;
    }else{
      this.tipusSeleccionat.checked = false;
      this.tipusSeleccionat = event;
    }
  }

}
