import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistreSimptomesPage } from './registre-simptomes.page';

describe('RegistreSimptomesPage', () => {
  let component: RegistreSimptomesPage;
  let fixture: ComponentFixture<RegistreSimptomesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistreSimptomesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistreSimptomesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
