import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuari : string;
  contrasenya : string;

  constructor() { }

  ngOnInit() {
  }

  login( event ){
    console.log(this.usuari, this.contrasenya, event);
  }

}
