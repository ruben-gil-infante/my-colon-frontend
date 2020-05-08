import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicacioTardaPage } from './medicacio-tarda.page';

describe('MedicacioTardaPage', () => {
  let component: MedicacioTardaPage;
  let fixture: ComponentFixture<MedicacioTardaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicacioTardaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicacioTardaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
