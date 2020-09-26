import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectbehaviorComponent } from './subjectbehavior.component';

describe('SubjectbehaviorComponent', () => {
  let component: SubjectbehaviorComponent;
  let fixture: ComponentFixture<SubjectbehaviorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectbehaviorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectbehaviorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
