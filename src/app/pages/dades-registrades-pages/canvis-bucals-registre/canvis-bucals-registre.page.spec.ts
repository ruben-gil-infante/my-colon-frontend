import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CanvisBucalsRegistrePage } from './canvis-bucals-registre.page';

describe('CanvisBucalsRegistrePage', () => {
  let component: CanvisBucalsRegistrePage;
  let fixture: ComponentFixture<CanvisBucalsRegistrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvisBucalsRegistrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CanvisBucalsRegistrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
