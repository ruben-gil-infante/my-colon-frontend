import { Component, OnInit } from '@angular/core';
import { Calendar } from '@ionic-native/calendar/ngx';


@Component({
  selector: 'app-calendari',
  templateUrl: './calendari.page.html',
  styleUrls: ['./calendari.page.scss'],
})
export class CalendariPage implements OnInit {

  constructor(private calendar : Calendar) { }


  ngOnInit() {
    const calendar = this.calendar.createCalendar('My Calendar').then(
      (msg) => console.log(msg),
      (err) => console.log(err)
    );
  }
}
