import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PearlMasterScoreComponent } from './pearl-master-score.component';

describe('PearlMasterScoreComponent', () => {
  let component: PearlMasterScoreComponent;
  let fixture: ComponentFixture<PearlMasterScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PearlMasterScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PearlMasterScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
