import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { validateEmail } from "src/app/helpers/utils";
import { AlertController } from "@ionic/angular";
import { Router } from "@angular/router";


@Component({
  selector: "app-registrarse",
  templateUrl: "./registrarse.page.html",
  styleUrls: ["./registrarse.page.scss"],
})
export class RegistrarsePage implements OnInit {
  endpoint: string = "/api/v1/registrar";

  displayGenere: string = "";
  usuariForm = {
    nom: "",
    primerCognom: "",
    segonCognom: "",
    correuElectronic: "",
    genere: "",
    dataNaixement: "",
    password: "",
    confirmacioPassword: "",
  };

  constructor( private dataService: DataService, private alertController: AlertController, private router: Router) {}

  ngOnInit() {}

  async seleccionarGenere() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Gènere',
      inputs: [
        {
          name: 'Home',
          type: 'radio',
          label: 'Home',
          value: 0,
          checked: false
        },
        {
          name: 'Dona',
          type: 'radio',
          label: 'Dona',
          value: 1
        },
        {
          name: 'Altres',
          type: 'radio',
          label: 'Altres',
          value: 2
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            this.usuariForm.genere = data;
            switch(data){
              case 0:
                this.displayGenere = 'Home';
                break;
              case 1:
                this.displayGenere = 'Dona';
                break;
              case 2:
                this.displayGenere = 'Altres';
                break;
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async registrarse() {
    if (!this.checkForm()) return;

    (await this.dataService.submit(this.endpoint, this.usuariForm)).subscribe(
      (data) => {
        this.dataService.loadingControllerDismiss();
        this.router.navigateByUrl("login");
      },
      (error) => {
        this.dataService.loadingControllerDismiss();
        if(error.status === 403){
          this.dataService.presentToast("Usuari prèviament registrat");
        }else{
          this.dataService.presentToast("Error Registrant");
        }
      }
    );
  }

  checkForm() {
    if(this.usuariForm.nom.trim().length === 0){
      this.dataService.presentToast("Introdueix un nom");
      return false;
    }

    if(this.usuariForm.primerCognom.trim().length === 0){
      this.dataService.presentToast("Introdueix el primer cognom");
      return false;
    }
    
    if(this.usuariForm.dataNaixement == ""){
      this.dataService.presentToast("Introdueix la teva edat");
      return false;
    }

    if(!validateEmail(this.usuariForm.correuElectronic)){
      this.dataService.presentToast("El correu electrònic introduït no és vàlid");
      return false;
    }

    if(this.usuariForm.genere === ""){
      this.dataService.presentToast("Selecciona un gènere");
      return false;
    }

    if(this.usuariForm.password === ""){
      this.dataService.presentToast("Introdueix un password");
      return false;
    }

    if(this.usuariForm.confirmacioPassword !== this.usuariForm.password){
      this.dataService.presentToast("Les contrasenyes introduïdes no coincideixen");
      return false;
    }

    return true;
  }
}
