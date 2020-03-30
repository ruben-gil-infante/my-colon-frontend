import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiarreesPage } from './diarrees.page';

describe('DiarreesPage', () => {
  let component: DiarreesPage;
  let fixture: ComponentFixture<DiarreesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiarreesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiarreesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
