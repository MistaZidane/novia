import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentCourseComponent } from './department-course.component';

describe('DepartmentCourseComponent', () => {
  let component: DepartmentCourseComponent;
  let fixture: ComponentFixture<DepartmentCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
