import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/core/score.service';

@Component({
  selector: 'app-color-score',
  templateUrl: './color-score.component.html',
  styleUrls: ['./color-score.component.scss']
})
export class ColorScoreComponent implements OnInit {

  constructor(private scoreService: ScoreService) { }

  ngOnInit(): void {
  }

  getScore(red: string, blue: string, green: string): number {

    let n1 = parseInt(red, 10) || 0;
    let n2 = parseInt(blue, 10) || 0;
    let n3 = parseInt(green, 10) || 0;
    let score = 0;
    score = n1 + n2 + n3;
    if (score == NaN) {
      score = 0;
    }
    this.scoreService.changeScore(score);
    return score;
  }

}
