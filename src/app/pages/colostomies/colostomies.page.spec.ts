import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ColostomiesPage } from './colostomies.page';

describe('ColostomiesPage', () => {
  let component: ColostomiesPage;
  let fixture: ComponentFixture<ColostomiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColostomiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ColostomiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
