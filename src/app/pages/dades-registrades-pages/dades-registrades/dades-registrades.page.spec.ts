import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DadesRegistradesPage } from './dades-registrades.page';

describe('DadesRegistradesPage', () => {
  let component: DadesRegistradesPage;
  let fixture: ComponentFixture<DadesRegistradesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadesRegistradesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DadesRegistradesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
