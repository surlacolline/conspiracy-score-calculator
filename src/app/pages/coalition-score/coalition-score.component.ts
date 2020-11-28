import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/core/models/player.model';
import { ScoreService } from 'src/app/core/score.service';

@Component({
  selector: 'app-coalition-score',
  templateUrl: './coalition-score.component.html',
  styleUrls: ['./coalition-score.component.scss']
})
export class CoalitionScoreComponent implements OnInit {
  @Input() player: Player;
  currentPlayer: Player;

  constructor(private scoreService: ScoreService) { }

  ngOnInit(): void {

    this.scoreService.currentScore.subscribe(player => this.currentPlayer = player);
  }

  getScore(value: number): number {
    if (!this.currentPlayer?.score) {
      return 0;
    }
    const score = value * 3;
    this.currentPlayer.score.coalition = value;
    this.scoreService.changeScore(this.currentPlayer);
    return score;
  }

}
