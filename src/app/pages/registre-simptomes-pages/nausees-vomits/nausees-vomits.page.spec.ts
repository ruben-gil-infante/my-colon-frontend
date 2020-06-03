import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NauseesVomitsPage } from './nausees-vomits.page';

describe('NauseesVomitsPage', () => {
  let component: NauseesVomitsPage;
  let fixture: ComponentFixture<NauseesVomitsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NauseesVomitsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NauseesVomitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
