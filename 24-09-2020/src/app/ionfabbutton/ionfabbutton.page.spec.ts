import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonfabbuttonPage } from './ionfabbutton.page';

describe('IonfabbuttonPage', () => {
  let component: IonfabbuttonPage;
  let fixture: ComponentFixture<IonfabbuttonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonfabbuttonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonfabbuttonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
