import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CanvisBucalsPage } from './canvis-bucals.page';

describe('CanvisBucalsPage', () => {
  let component: CanvisBucalsPage;
  let fixture: ComponentFixture<CanvisBucalsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvisBucalsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CanvisBucalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
