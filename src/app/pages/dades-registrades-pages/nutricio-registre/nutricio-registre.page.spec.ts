import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NutricioRegistrePage } from './nutricio-registre.page';

describe('NutricioRegistrePage', () => {
  let component: NutricioRegistrePage;
  let fixture: ComponentFixture<NutricioRegistrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutricioRegistrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NutricioRegistrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
