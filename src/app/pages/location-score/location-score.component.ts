import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Player } from 'src/app/core/models/player.model';
import { ScoreService } from 'src/app/core/score.service';

@Component({
  selector: 'app-location-score',
  templateUrl: './location-score.component.html',
  styleUrls: ['./location-score.component.scss']
})
export class LocationScoreComponent implements OnInit {
  @Input() player: Player;
  locationScore: FormGroup;
  scoreTotal: number;
  currentPlayer: Player;
  constructor(private scoreService: ScoreService) { }

  ngOnInit(): void {
    this.locationScore = this.createFormGroup();
    this.scoreService.currentScore.subscribe(player => this.currentPlayer = player);
    this.locationScore.valueChanges.subscribe(x => {
      this.getScore();
    });
  }

  createFormGroup() {
    return new FormGroup({
      location1: new FormControl(0, Validators.max(20)),
      location2: new FormControl(0, Validators.max(20)),
      location3: new FormControl(0, Validators.max(20)),
      location4: new FormControl(0, Validators.max(20)),
      location5: new FormControl(0, Validators.max(20)),
      location6: new FormControl(0, Validators.max(20)),
    });
  }

  getScore(): number {
    if (!this.currentPlayer?.score) {
      return 0;
    }
    this.currentPlayer.score.location = [];
    this.currentPlayer.score.location.push(...[this.locationScore.controls['location1'].value,
    this.locationScore.controls['location2'].value,
    this.locationScore.controls['location3'].value,
    this.locationScore.controls['location4'].value,
    this.locationScore.controls['location5'].value,
    this.locationScore.controls['location6'].value])


    this.scoreService.changeScore(this.currentPlayer);
    return this.currentPlayer.score.location.reduce((partial_sum, a) => partial_sum + a, 0);


  }

}
