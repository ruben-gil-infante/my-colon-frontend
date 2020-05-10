import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuari : string;
  password : string;

  constructor(private modalController : ModalController, private httpClient : HttpClient,
              private dataService : DataService, private loadingController: LoadingController) { }

  ngOnInit() {
  }

  async login( event ){
    const loading = await this.loadingController.create({
      message: 'Autenticant...',
    });

    await loading.present();

    let endpoint = `http://localhost:8080/api/v1/usuari/${this.usuari}/${this.password}`
  
    this.httpClient.get<any>(endpoint).subscribe({
      next: data => {
        this.loadingController.dismiss();
        this.dataService.setInformacioUsuari(data.id, data.password);
        this.modalController.dismiss()
      },
      error: error => {
        this.dataService.presentToast('Usuari o contrasenya incorrectes');
      }
    })
  
  }

}
