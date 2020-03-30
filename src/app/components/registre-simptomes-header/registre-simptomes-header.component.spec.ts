import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistreSimptomesHeaderComponent } from './registre-simptomes-header.component';

describe('RegistreSimptomesHeaderComponent', () => {
  let component: RegistreSimptomesHeaderComponent;
  let fixture: ComponentFixture<RegistreSimptomesHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistreSimptomesHeaderComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistreSimptomesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
