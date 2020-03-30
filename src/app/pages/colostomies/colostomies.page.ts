import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colostomies',
  templateUrl: './colostomies.page.html',
  styleUrls: ['./colostomies.page.scss'],
})
export class ColostomiesPage implements OnInit {

  private tipusColostomia : string [] = [
    'Colòstomia transversal',
    'Colòstomia ascendent',
    'Colòstomia descendent i sigmoide'
  ]

  private informacio : string [] = [
    'Cures de l`estoma',
    'Buidatge i canvi de bossa col·lectora',
    'Material',
    'Irrigació de colostomia',
    'Com actuo davant els problemes que em sorgeixen'
  ]

  constructor() { }

  ngOnInit() {
  }

}
