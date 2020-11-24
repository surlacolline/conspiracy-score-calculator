import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/core/score.service';

@Component({
  selector: 'app-score-input',
  templateUrl: './score-input.component.html',
  styleUrls: ['./score-input.component.scss']
})
export class ScoreInputComponent implements OnInit {
  scoreTotal: number;
  constructor(private scoreService: ScoreService) { }

  ngOnInit(): void {
    this.scoreService.currentScore.subscribe((score: number) => this.scoreTotal = score);
  }

}
