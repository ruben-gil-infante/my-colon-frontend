import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NauseesVomitsRegistrePage } from './nausees-vomits-registre.page';

describe('NauseesVomitsRegistrePage', () => {
  let component: NauseesVomitsRegistrePage;
  let fixture: ComponentFixture<NauseesVomitsRegistrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NauseesVomitsRegistrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NauseesVomitsRegistrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
