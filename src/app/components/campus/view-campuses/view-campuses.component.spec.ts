import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCampusesComponent } from './view-campuses.component';

describe('ViewCampusesComponent', () => {
  let component: ViewCampusesComponent;
  let fixture: ComponentFixture<ViewCampusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCampusesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCampusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
