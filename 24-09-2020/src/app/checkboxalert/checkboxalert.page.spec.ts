import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckboxalertPage } from './checkboxalert.page';

describe('CheckboxalertPage', () => {
  let component: CheckboxalertPage;
  let fixture: ComponentFixture<CheckboxalertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxalertPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckboxalertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
