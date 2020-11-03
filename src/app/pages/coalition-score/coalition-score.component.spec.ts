import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoalitionScoreComponent } from './coalition-score.component';

describe('CoalitionScoreComponent', () => {
  let component: CoalitionScoreComponent;
  let fixture: ComponentFixture<CoalitionScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoalitionScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoalitionScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
