import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComunitatPage } from './comunitat.page';

describe('ComunitatPage', () => {
  let component: ComunitatPage;
  let fixture: ComponentFixture<ComunitatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunitatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComunitatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
