import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private score = new BehaviorSubject<number>(0);
  currentScore = this.score.asObservable();

  constructor() { }

  public changeScore(score: number) {
    this.score.next(score);
  }
}
