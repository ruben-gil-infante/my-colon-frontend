import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { SigneVitalItem } from 'src/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-signe-vital-item',
  templateUrl: './signe-vital-item.component.html',
  styleUrls: ['./signe-vital-item.component.scss'],
})
export class SigneVitalItemComponent implements OnInit {

  @Input() item: SigneVitalItem;
  @Output() guardarSigneVital = new EventEmitter();

  constructor(private dataService : DataService) { }

  ngOnInit() {}

  registrarSigneVital(){
    if(this.item.valor < 0 || this.item.valor == undefined){
      this.dataService.presentToast("El valor introduït no és vàlid");
    }else{
      this.guardarSigneVital.emit(this.item);
    }
  }

}
