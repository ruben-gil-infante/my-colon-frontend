import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicacioPage } from './medicacio.page';

describe('MedicacioPage', () => {
  let component: MedicacioPage;
  let fixture: ComponentFixture<MedicacioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicacioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicacioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
