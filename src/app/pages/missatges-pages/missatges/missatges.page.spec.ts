import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MissatgesPage } from './missatges.page';

describe('MissatgesPage', () => {
  let component: MissatgesPage;
  let fixture: ComponentFixture<MissatgesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissatgesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MissatgesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
