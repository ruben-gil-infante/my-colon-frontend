import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FatigaPage } from './fatiga.page';

describe('FatigaPage', () => {
  let component: FatigaPage;
  let fixture: ComponentFixture<FatigaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatigaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FatigaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
