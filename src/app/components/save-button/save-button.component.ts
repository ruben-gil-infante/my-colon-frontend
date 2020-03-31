import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.scss'],
})
export class SaveButtonComponent implements OnInit {


  constructor() { }

  ngOnInit() {}

  onClick( event ){
    console.log( event )
  }

}
