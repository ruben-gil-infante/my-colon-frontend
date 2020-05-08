import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicacioMatiPage } from './medicacio-mati.page';

describe('MedicacioMatiPage', () => {
  let component: MedicacioMatiPage;
  let fixture: ComponentFixture<MedicacioMatiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicacioMatiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicacioMatiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
