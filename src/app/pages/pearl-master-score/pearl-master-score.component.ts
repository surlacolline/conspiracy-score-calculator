import { Component, Input, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Player } from 'src/app/core/models/player.model';
import { ScoreService } from 'src/app/core/score.service';

@Component({
  selector: 'app-pearl-master-score',
  templateUrl: './pearl-master-score.component.html',
  styleUrls: ['./pearl-master-score.component.scss']
})
export class PearlMasterScoreComponent implements OnInit {
  @Input() player: Player;
  isMaster: boolean = false;
  currentPlayer: Player;

  constructor(private scoreService: ScoreService) { }

  ngOnInit(): void {
    this.scoreService.currentScore.subscribe(player => this.currentPlayer = player);
  }

  getScore(isMaster: MatCheckboxChange): number {

    if (isMaster.checked) {
      this.currentPlayer.score.isMaster = true;
      this.scoreService.changeScore(this.currentPlayer);
      this.isMaster = true;
      return 5;
    }
    this.currentPlayer.score.isMaster = false
    this.scoreService.changeScore(this.currentPlayer);
    this.isMaster = false;
    return 0;

  }

  getColor() {
    if (this.isMaster) {
      return "primary";
    } else {
      return "";
    }

  }

}
