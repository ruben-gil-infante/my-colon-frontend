import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DolorRegistrePage } from './dolor-registre.page';

describe('DolorRegistrePage', () => {
  let component: DolorRegistrePage;
  let fixture: ComponentFixture<DolorRegistrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DolorRegistrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DolorRegistrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
