import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-formulari-medicacio',
  templateUrl: './formulari-medicacio.page.html',
  styleUrls: ['./formulari-medicacio.page.scss'],
})
export class FormulariMedicacioPage implements OnInit {

  constructor(private modalController : ModalController) { }

  ngOnInit() {
  }

  guardarMedicacio(){
    console.log("Guardar medicacio");
    this.modalController.dismiss();
  }

}
