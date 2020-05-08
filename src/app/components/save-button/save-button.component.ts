import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.scss'],
})
export class SaveButtonComponent implements OnInit {

  @Output() guardar = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  onClick( event ){
    this.guardar.emit();
  }

}
