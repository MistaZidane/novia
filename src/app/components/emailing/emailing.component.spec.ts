import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailingComponent } from './emailing.component';

describe('EmailingComponent', () => {
  let component: EmailingComponent;
  let fixture: ComponentFixture<EmailingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
