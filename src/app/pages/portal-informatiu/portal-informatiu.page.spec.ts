import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PortalInformatiuPage } from './portal-informatiu.page';

describe('PortalInformatiuPage', () => {
  let component: PortalInformatiuPage;
  let fixture: ComponentFixture<PortalInformatiuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalInformatiuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PortalInformatiuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
