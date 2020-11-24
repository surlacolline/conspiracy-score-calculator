import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private score = new BehaviorSubject<number>(0);
  currentScore = this.score.asObservable();

  private colorScore = 0;
  private locationScore = 0;
  private coalitionScore = 0;

  get totalScore(): number {
    return this.colorScore + this.locationScore + this.coalitionScore;
  }

  constructor() { }



  public changeColorScore(score: number) {
    this.colorScore = score;
    this.score.next(this.totalScore);
  }

  public changeLocationScore(score: number) {
    this.locationScore = score;
    this.score.next(this.totalScore);
  }

  public changeCoalitionScore(score: number) {
    this.coalitionScore = score;
    this.score.next(this.totalScore);
  }
}
