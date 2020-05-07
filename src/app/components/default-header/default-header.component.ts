import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.scss'],
})
export class DefaultHeaderComponent implements OnInit {

  @Input() titol : string;
  @Input() icon : string;
  @Input() defaultHref : string = "/";

  constructor() { }

  ngOnInit() {}

}
