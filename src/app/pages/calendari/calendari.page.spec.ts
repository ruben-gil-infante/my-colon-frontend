import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalendariPage } from './calendari.page';

describe('CalendariPage', () => {
  let component: CalendariPage;
  let fixture: ComponentFixture<CalendariPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendariPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalendariPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
