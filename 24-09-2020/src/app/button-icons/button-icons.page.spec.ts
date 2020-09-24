import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ButtonIconsPage } from './button-icons.page';

describe('ButtonIconsPage', () => {
  let component: ButtonIconsPage;
  let fixture: ComponentFixture<ButtonIconsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonIconsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonIconsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
