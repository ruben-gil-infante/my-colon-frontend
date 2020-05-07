import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignesVitalsPage } from './signes-vitals.page';

describe('SignesVitalsPage', () => {
  let component: SignesVitalsPage;
  let fixture: ComponentFixture<SignesVitalsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignesVitalsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignesVitalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
