import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuari : string;
  contrasenya : string;

  constructor(private modalController : ModalController) { }

  ngOnInit() {
  }

  login( event ){
    this.modalController.dismiss();
  }

}
