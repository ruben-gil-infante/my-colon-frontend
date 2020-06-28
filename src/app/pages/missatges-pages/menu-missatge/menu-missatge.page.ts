import { Component, OnInit } from '@angular/core';
import { Usuari } from 'src/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';
import { PagecomunicationService } from 'src/app/services/pagecomunication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-missatge',
  templateUrl: './menu-missatge.page.html',
  styleUrls: ['./menu-missatge.page.scss'],
})
export class MenuMissatgePage implements OnInit {

  usuaris: Usuari [] = [];

  constructor(private dataService : DataService, private pageComunicationService : PagecomunicationService,
              private router : Router) { }

  ngOnInit() {
    this.loadData();
  }

  async loadData(){
    (await this.dataService.request<Usuari[]>(`/api/v1/usuaris/sanitari/${this.dataService.getUsuari().sanitari}`)).subscribe(
      data => {
        this.dataService.loadingControllerDismiss();
        this.usuaris = data;
        this.usuaris = this.usuaris.filter(usuari => usuari.correuElectronic != this.dataService.getUsuari().correuElectronic);
      },
      error => {
        this.dataService.loadingControllerDismiss();
        this.dataService.presentToast("Error carregant");
      }
    );
  }

  obrirChat(usuari){
    this.pageComunicationService.storageData(usuari);
    this.router.navigateByUrl('missatges');
  }

}
