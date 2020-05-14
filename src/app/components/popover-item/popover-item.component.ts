import { Component, OnInit, Input } from '@angular/core';
import { PopoverItem } from 'src/interfaces/interfaces';
import { PopoverController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-popover-item',
  templateUrl: './popover-item.component.html',
  styleUrls: ['./popover-item.component.scss'],
})
export class PopoverItemComponent implements OnInit {

  items: PopoverItem[];

  constructor(private navParams : NavParams,private popoverController : PopoverController) { }

  ngOnInit() {
    this.items = this.navParams.get('items');
  }

  itemSeleccionat(event){
    this.popoverController.dismiss({
      data: event
    })
  }

}
