import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IPlayer } from 'src/app/core/models/player.model';
import { ScoreService } from 'src/app/core/score.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  providers: [ScoreService]
})
export class PlayerComponent implements OnInit {
  @Input() player: IPlayer;
  isShowStepper = false;
  score: number;



  constructor(private scoreService: ScoreService) { }

  ngOnInit(): void {
    if (!this.player) {
      this.player = { name: "pa", score: 0 };
    }


    this.scoreService.currentScore.subscribe(score => this.player.score = score);
  }



  showStepper(): void {
    this.isShowStepper = !this.isShowStepper;
  }
}
