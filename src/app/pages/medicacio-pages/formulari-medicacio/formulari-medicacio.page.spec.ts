import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormulariMedicacioPage } from './formulari-medicacio.page';

describe('FormulariMedicacioPage', () => {
  let component: FormulariMedicacioPage;
  let fixture: ComponentFixture<FormulariMedicacioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulariMedicacioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormulariMedicacioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

