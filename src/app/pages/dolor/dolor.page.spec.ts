import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DolorPage } from './dolor.page';

describe('DolorPage', () => {
  let component: DolorPage;
  let fixture: ComponentFixture<DolorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DolorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DolorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
