import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PromptalertPage } from './promptalert.page';

describe('PromptalertPage', () => {
  let component: PromptalertPage;
  let fixture: ComponentFixture<PromptalertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromptalertPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PromptalertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
