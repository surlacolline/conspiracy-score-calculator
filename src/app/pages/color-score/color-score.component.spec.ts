import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorScoreComponent } from './color-score.component';

describe('ColorScoreComponent', () => {
  let component: ColorScoreComponent;
  let fixture: ComponentFixture<ColorScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
