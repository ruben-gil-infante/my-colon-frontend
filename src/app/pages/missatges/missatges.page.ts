import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-missatges',
  templateUrl: './missatges.page.html',
  styleUrls: ['./missatges.page.scss'],
})
export class MissatgesPage implements OnInit {

  constructor(public emailComposer : EmailComposer) { }

  ngOnInit() {
    this.emailComposer.open({
      to: 'rgili@edu.tecnocampus.cat'
    })
  }

}
