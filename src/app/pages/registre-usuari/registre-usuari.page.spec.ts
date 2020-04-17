import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistreUsuariPage } from './registre-usuari.page';

describe('RegistreUsuariPage', () => {
  let component: RegistreUsuariPage;
  let fixture: ComponentFixture<RegistreUsuariPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistreUsuariPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistreUsuariPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
