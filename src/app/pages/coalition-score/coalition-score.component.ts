import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/core/score.service';

@Component({
  selector: 'app-coalition-score',
  templateUrl: './coalition-score.component.html',
  styleUrls: ['./coalition-score.component.scss']
})
export class CoalitionScoreComponent implements OnInit {

  constructor(private scoreService: ScoreService) { }

  ngOnInit(): void {
  }

  getScore(value: number): number {
    const score = value * 3;
    this.scoreService.changeCoalitionScore(score);
    return score;
  }

}
