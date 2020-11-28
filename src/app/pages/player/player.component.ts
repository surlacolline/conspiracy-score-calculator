import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Player } from 'src/app/core/models/player.model';
import { Score } from 'src/app/core/models/score.model';
import { ScoreService } from 'src/app/core/score.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  providers: [ScoreService]
})
export class PlayerComponent implements OnInit {
  @Input() player: Player;
  isShowStepper = false;
  score: number;



  constructor(private scoreService: ScoreService) { }

  ngOnInit(): void {


    this.scoreService.changeScore(this.player);

    this.scoreService.currentScore.subscribe(player => {
      this.player = player;
      this.score = this.player.score.totalScore;
    });
  }



  showStepper(): void {
    this.isShowStepper = !this.isShowStepper;
  }
  isStepperDone(player: Player) {
    debugger
    // this.player = player;
    this.isShowStepper = false;

  }
}
