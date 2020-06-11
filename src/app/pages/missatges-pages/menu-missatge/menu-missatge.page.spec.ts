import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuMissatgePage } from './menu-missatge.page';

describe('MenuMissatgePage', () => {
  let component: MenuMissatgePage;
  let fixture: ComponentFixture<MenuMissatgePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuMissatgePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuMissatgePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
