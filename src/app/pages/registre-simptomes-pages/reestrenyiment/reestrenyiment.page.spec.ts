import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReestrenyimentPage } from './reestrenyiment.page';

describe('ReestrenyimentPage', () => {
  let component: ReestrenyimentPage;
  let fixture: ComponentFixture<ReestrenyimentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReestrenyimentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReestrenyimentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
