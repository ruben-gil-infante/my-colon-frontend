import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SigneVitalItemComponent } from './signe-vital-item.component';

describe('SigneVitalItemComponent', () => {
  let component: SigneVitalItemComponent;
  let fixture: ComponentFixture<SigneVitalItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigneVitalItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SigneVitalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
