import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FatigaRegistrePage } from './fatiga-registre.page';

describe('FatigaRegistrePage', () => {
  let component: FatigaRegistrePage;
  let fixture: ComponentFixture<FatigaRegistrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatigaRegistrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FatigaRegistrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
