import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiarreesRegistrePage } from './diarrees-registre.page';

describe('DiarreesRegistrePage', () => {
  let component: DiarreesRegistrePage;
  let fixture: ComponentFixture<DiarreesRegistrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiarreesRegistrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiarreesRegistrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
