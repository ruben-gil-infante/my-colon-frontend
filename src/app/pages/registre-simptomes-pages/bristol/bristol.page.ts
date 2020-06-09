import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-bristol',
  templateUrl: './bristol.page.html',
  styleUrls: ['./bristol.page.scss'],
})
export class BristolPage implements OnInit {

  elements = [
    {id: '1', image: '../../../assets/image/bristol-1.png'},
    {id: '2', image: '../../../assets/image/bristol-2.png'},
    {id: '3', image: '../../../assets/image/bristol-3.png'},
    {id: '4', image: '../../../assets/image/bristol-4.png'},
    {id: '5', image: '../../../assets/image/bristol-5.png'},
    {id: '6', image: '../../../assets/image/bristol-6.png'},
    {id: '7', image: '../../../assets/image/bristol-7.png'},
  ];

  constructor(private modalController : ModalController) { }

  ngOnInit() {
  }

  femtaSeleccionada(tipusSeleccionat){
    this.modalController.dismiss({
      bristol: tipusSeleccionat
    });
  }

}
