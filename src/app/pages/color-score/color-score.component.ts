import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Player } from 'src/app/core/models/player.model';
import { ScoreService } from 'src/app/core/score.service';

@Component({
  selector: 'app-color-score',
  templateUrl: './color-score.component.html',
  styleUrls: ['./color-score.component.scss']
})
export class ColorScoreComponent implements OnInit {

  @Input() formGroup;
  player: Player;
  colorScore: FormGroup;
  currentPlayer: Player;

  constructor(private scoreService: ScoreService) { }

  ngOnInit(): void {

    this.colorScore = this.createFormGroup();
    this.scoreService.currentScore.subscribe(player => {

      this.currentPlayer = player;
    });
    this.colorScore.valueChanges.subscribe(() => {

      this.getScore();
    });
  }
  createFormGroup() {
    return new FormGroup({
      blue: new FormControl(1),
      red: new FormControl(1),
      yellow: new FormControl(1),
      green: new FormControl(1),
      purple: new FormControl(1),
    });
  }
  getScore(): number {

    if (!this.currentPlayer?.score) {
      return 0;
    }

    this.currentPlayer.score.blue = +this.colorScore.controls['blue'].value as number;
    this.currentPlayer.score.red = +this.colorScore.controls['red'].value as number;
    this.currentPlayer.score.yellow = +this.colorScore.controls['yellow'].value as number;
    this.currentPlayer.score.green = +this.colorScore.controls['green'].value as number;
    this.currentPlayer.score.purple = +this.colorScore.controls['purple'].value as number;

    this.scoreService.changeScore(this.currentPlayer);
    return this.currentPlayer.score.colorScore;
  }

}
