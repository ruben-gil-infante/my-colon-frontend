import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignesVitalsRegistrePage } from './signes-vitals-registre.page';

describe('SignesVitalsRegistrePage', () => {
  let component: SignesVitalsRegistrePage;
  let fixture: ComponentFixture<SignesVitalsRegistrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignesVitalsRegistrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignesVitalsRegistrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
