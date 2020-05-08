import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-fav-button',
  templateUrl: './fav-button.component.html',
  styleUrls: ['./fav-button.component.scss'],
})
export class FavButtonComponent implements OnInit {

  @Output() favButtonPressed = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  onClick ( event ) {
    this.favButtonPressed.emit();
  }

}
