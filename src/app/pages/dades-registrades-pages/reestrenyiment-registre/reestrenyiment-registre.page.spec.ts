import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReestrenyimentRegistrePage } from './reestrenyiment-registre.page';

describe('ReestrenyimentRegistrePage', () => {
  let component: ReestrenyimentRegistrePage;
  let fixture: ComponentFixture<ReestrenyimentRegistrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReestrenyimentRegistrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReestrenyimentRegistrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
