import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicacioNitPage } from './medicacio-nit.page';

describe('MedicacioNitPage', () => {
  let component: MedicacioNitPage;
  let fixture: ComponentFixture<MedicacioNitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicacioNitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicacioNitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
