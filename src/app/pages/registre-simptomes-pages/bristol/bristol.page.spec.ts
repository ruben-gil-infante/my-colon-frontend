import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BristolPage } from './bristol.page';

describe('BristolPage', () => {
  let component: BristolPage;
  let fixture: ComponentFixture<BristolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BristolPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BristolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
