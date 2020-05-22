import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { emptyString, validateEmail } from 'src/app/helpers/utils';
import { PopoverController } from '@ionic/angular';
import { PopoverItemComponent } from 'src/app/components/popover-item/popover-item.component';
import { PopoverItem } from 'src/interfaces/interfaces';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  endpoint: string = '/api/v1/registrar'

  usuariForm = {
    nom: '',
    primerCognom: '',
    segonCognom: '',
    correuElectronic: '',
    genere: '',
    edat: '',
    password: '',
    confirmacioPassword: ''
  }

  generes: PopoverItem [] = [
    {id: 0, text: 'Home'},
    {id: 1, text: 'Dona'},
    {id: 2, text: 'Altres'}
  ]

  constructor(private dataService : DataService, private popoverController : PopoverController,
              private router : Router) { }

  ngOnInit() {
  }

  async seleccionarGenere(){
    const popover = await this.popoverController.create({
      component: PopoverItemComponent,
      event: event,
      mode: 'ios',
      backdropDismiss: false,
      componentProps: {items: this.generes}
    });

    await popover.present();

    const { data } = await popover.onWillDismiss();

    this.usuariForm.genere = data.event.id;
  }

  // FIXME: Mostrar errors correctament quan l'usuari no es pot registrar
  async registrarse(){
    if(!this.checkForm())
      return;

    (await this.dataService.submit(this.endpoint, this.usuariForm)).subscribe(
      data => {
        this.dataService.loadingControllerDismiss();
        this.dataService.presentToast("Usuari registrat correctament");
        this.router.navigateByUrl('home');
      },
      error => {
        this.dataService.loadingControllerDismiss();
        this.dataService.presentToast("Error Registrant...");
      }
    );

  };

  checkForm(){
    return true;
  }

}
