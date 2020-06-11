import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { PagecomunicationService } from 'src/app/services/pagecomunication.service';
import { Usuari } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-missatges',
  templateUrl: './missatges.page.html',
  styleUrls: ['./missatges.page.scss'],
})
export class MissatgesPage implements OnInit {

  textMissatge: string;
  requestEndpoint: string;
  postEndpoint: string = '/api/v1/message';
  missatges: Message[] = [];
  messageReceiverUser: Usuari = undefined;

  constructor(private dataService : DataService, private pageComunicationService : PagecomunicationService) { }

  ngOnInit() {
    this.messageReceiverUser = this.pageComunicationService.retrieveData<Usuari>();
    this.requestEndpoint = `/api/v1/message/${this.dataService.getUsuariId()}/${this.messageReceiverUser.id}`;
    setInterval(() => {this.loadData();}, 500);
  }

  async loadData(){
    (await this.dataService.requestWihtoutLoadingModal<Message[]>(this.requestEndpoint)).subscribe(
      data => {
        this.missatges = data;
      },
      error => {
        this.dataService.presentToast("Error carregant els missatges");
      }
    );
  }

  async enviarMissatge(){
    let missatge = {
      text: this.textMissatge,
      emisorId: this.dataService.getUsuariId(),
      receptorId: this.messageReceiverUser.id
    };

    (await this.dataService.submit<Message>(this.postEndpoint, missatge)).subscribe(
      data => {
        this.dataService.loadingControllerDismiss();
        this.textMissatge = "";
      },
      error => {
        this.dataService.loadingControllerDismiss();
        this.dataService.presentToast("Error enviant el missatge");
      }
    );

  }

}
