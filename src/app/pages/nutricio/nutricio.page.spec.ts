import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NutricioPage } from './nutricio.page';

describe('NutricioPage', () => {
  let component: NutricioPage;
  let fixture: ComponentFixture<NutricioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutricioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NutricioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
