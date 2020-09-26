import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreefvComponent } from './treefv.component';

describe('TreefvComponent', () => {
  let component: TreefvComponent;
  let fixture: ComponentFixture<TreefvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreefvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreefvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
