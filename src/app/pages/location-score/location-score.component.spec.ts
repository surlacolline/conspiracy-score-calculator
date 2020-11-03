import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationScoreComponent } from './location-score.component';

describe('LocationScoreComponent', () => {
  let component: LocationScoreComponent;
  let fixture: ComponentFixture<LocationScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
