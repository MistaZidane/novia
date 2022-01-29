import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDepartmentsComponent } from './view-departments.component';

describe('ViewDepartmentsComponent', () => {
  let component: ViewDepartmentsComponent;
  let fixture: ComponentFixture<ViewDepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDepartmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
