import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCampusesComponent } from './edit-campuses.component';

describe('EditCampusesComponent', () => {
  let component: EditCampusesComponent;
  let fixture: ComponentFixture<EditCampusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCampusesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCampusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
