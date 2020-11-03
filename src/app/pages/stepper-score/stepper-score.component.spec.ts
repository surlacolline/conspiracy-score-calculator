import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperScoreComponent } from './stepper-score.component';

describe('StepperScoreComponent', () => {
  let component: StepperScoreComponent;
  let fixture: ComponentFixture<StepperScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
