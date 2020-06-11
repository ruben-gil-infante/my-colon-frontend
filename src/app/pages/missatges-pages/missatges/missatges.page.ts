import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { PagecomunicationService } from 'src/app/services/pagecomunication.service';
import { Usuari } from 'src/interfaces/interfaces';
import { IonList, IonContent } from '@ionic/angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-missatges',
  templateUrl: './missatges.page.html',
  styleUrls: ['./missatges.page.scss'],
})
export class MissatgesPage implements OnInit {

  @ViewChild('content', {static: false}) content: IonContent;

  textMissatge: string;
  requestEndpoint: string;
  postEndpoint: string = '/api/v1/message';
  missatges: Message[] = [];
  messageReceiverUser: Usuari = undefined;
  codiConversa: string = undefined;

  constructor(private dataService : DataService, private pageComunicationService : PagecomunicationService) { }

  ngOnInit() {
    this.messageReceiverUser = this.pageComunicationService.retrieveData<Usuari>();
    this.codiConversa = this.buildCodiConversa(this.messageReceiverUser.id, this.dataService.getUsuariId());
    this.requestEndpoint = `/api/v1/message/${this.codiConversa}`;
    setInterval(() => {this.loadData();}, 500);
  }

  buildCodiConversa(identificadorA, identificadorB){
    let codiConversa = '';
    
    (identificadorA > identificadorB)? codiConversa =  `${identificadorB}-${identificadorA}` :  codiConversa = `${identificadorA}-${identificadorB}`;
    
    return codiConversa;
  }

  async loadData(){
    (await this.dataService.requestWihtoutLoadingModal<Message[]>(this.requestEndpoint)).subscribe(
      data => {
        if(this.missatges.length !== data.length){
          this.missatges = data;
          this.content.scrollToBottom();
        }
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
      receptorId: this.messageReceiverUser.id,
      codiConversa: this.codiConversa
    };

    (await this.dataService.submit<Message>(this.postEndpoint, missatge)).subscribe(
      data => {
        this.dataService.loadingControllerDismiss();
        this.textMissatge = "";
        this.content.scrollToBottom();
      },
      error => {
        this.dataService.loadingControllerDismiss();
        this.dataService.presentToast("Error enviant el missatge");
      }
    );
  }

  missatgeClass(missatge, slot=false){
    if(slot){
      if(missatge.emisorId == this.dataService.getUsuariId()){
        return "end";
      }
      return "start";
    }

    if(missatge.emisorId == this.dataService.getUsuariId()){
      return "missatge-emissor bubble";
    }

    return "missatge-receptor bubble";
  }

}
