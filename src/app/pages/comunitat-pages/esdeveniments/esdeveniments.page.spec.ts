import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EsdevenimentsPage } from './esdeveniments.page';

describe('EsdevenimentsPage', () => {
  let component: EsdevenimentsPage;
  let fixture: ComponentFixture<EsdevenimentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsdevenimentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EsdevenimentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
