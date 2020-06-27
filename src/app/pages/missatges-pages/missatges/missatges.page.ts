import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { PagecomunicationService } from 'src/app/services/pagecomunication.service';
import { Usuari, Missatge } from 'src/interfaces/interfaces';
import { IonList, IonContent } from '@ionic/angular';
import { NativeAudio } from '@ionic-native/native-audio/ngx';



@Component({
  selector: 'app-missatges',
  templateUrl: './missatges.page.html',
  styleUrls: ['./missatges.page.scss'],
})
export class MissatgesPage implements OnInit, OnDestroy {

  @ViewChild('content', {static: false}) content: IonContent;

  textMissatge: string;
  requestEndpoint: string;
  postEndpoint: string = '/api/v1/missatges';
  missatges: Missatge[] = [];
  messageReceiverUser: Usuari = undefined;
  codiConversa: string = undefined;
  loadDataFunctionActivated: Boolean;

  constructor(private dataService : DataService, private pageComunicationService : PagecomunicationService,
              private nativeAudio : NativeAudio) { }

  ngOnInit() {
    this.messageReceiverUser = this.pageComunicationService.retrieveData<Usuari>();
    this.codiConversa = this.buildCodiConversa(this.messageReceiverUser.id, this.dataService.getUsuariId());
    this.requestEndpoint = `/api/v1/missatges/${this.codiConversa}`;

    this.loadDataFunctionActivated = true;
    setInterval(() => {this.loadData();}, 500);

  }

  ngOnDestroy() {
    this.loadDataFunctionActivated = false;
  }

  buildCodiConversa(identificadorA, identificadorB){
    let codiConversa = '';
    
    (identificadorA > identificadorB)? codiConversa =  `${identificadorB}-${identificadorA}` :  codiConversa = `${identificadorA}-${identificadorB}`;
    
    return codiConversa;
  }

  async loadData(){
    if(this.loadDataFunctionActivated){
      (await this.dataService.requestWithoutLoadingModal<Missatge[]>(this.requestEndpoint)).subscribe(
        data => {
          if(this.missatges.length !== data.length){
            this.missatges = data;
            this.content.scrollToBottom();
            this.nativeAudio.preloadSimple('audio1', 'src/assets/audio/notification_sound.mp3').then(() => {
              this.nativeAudio.play('audio1', () => this.nativeAudio.unload('audio1'));
            });
          }
        },
        error => {
          this.dataService.presentToast("Error carregant els missatges");
        }
      );
    }
  }

  async enviarMissatge(){
    let missatge = {
      text: this.textMissatge,
      emisorId: this.dataService.getUsuariId(),
      receptorId: this.messageReceiverUser.id,
      codiConversa: this.codiConversa
    };

    (await this.dataService.submit<Missatge>(this.postEndpoint, missatge)).subscribe(
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

  missatgeCssClass(missatge, slot=false){
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
