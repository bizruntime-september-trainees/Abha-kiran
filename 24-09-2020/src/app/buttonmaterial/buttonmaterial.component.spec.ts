import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonmaterialComponent } from './buttonmaterial.component';

describe('ButtonmaterialComponent', () => {
  let component: ButtonmaterialComponent;
  let fixture: ComponentFixture<ButtonmaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonmaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
