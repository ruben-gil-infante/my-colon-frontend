import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RangeBarComponent } from './range-bar.component';

describe('RangeBarComponent', () => {
  let component: RangeBarComponent;
  let fixture: ComponentFixture<RangeBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeBarComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RangeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
