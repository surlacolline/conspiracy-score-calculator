import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/core/models/player.model';
import { ScoreService } from 'src/app/core/score.service';

@Component({
  selector: 'app-score-input',
  templateUrl: './score-input.component.html',
  styleUrls: ['./score-input.component.scss']
})
export class ScoreInputComponent implements OnInit {

  currentPlayer: Player;
  scoreTotal = 0;
  constructor(private scoreService: ScoreService) { }

  ngOnInit(): void {
    this.scoreService.currentScore.subscribe((currentPlayer: Player) => {

      this.currentPlayer = currentPlayer;
      this.scoreTotal = this.currentPlayer?.score?.totalScore;
    }
    );
  }


}
