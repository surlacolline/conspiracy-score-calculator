import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlayerScoresComponent } from './list-player-scores.component';

describe('ListPlayerScoresComponent', () => {
  let component: ListPlayerScoresComponent;
  let fixture: ComponentFixture<ListPlayerScoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPlayerScoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlayerScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
