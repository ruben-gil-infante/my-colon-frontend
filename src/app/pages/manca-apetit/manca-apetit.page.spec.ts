import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MancaApetitPage } from './manca-apetit.page';

describe('MancaApetitPage', () => {
  let component: MancaApetitPage;
  let fixture: ComponentFixture<MancaApetitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MancaApetitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MancaApetitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
