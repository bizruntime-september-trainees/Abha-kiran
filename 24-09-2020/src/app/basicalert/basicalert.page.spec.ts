import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BasicalertPage } from './basicalert.page';

describe('BasicalertPage', () => {
  let component: BasicalertPage;
  let fixture: ComponentFixture<BasicalertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicalertPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BasicalertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
