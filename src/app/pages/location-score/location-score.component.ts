import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ScoreService } from 'src/app/core/score.service';

@Component({
  selector: 'app-location-score',
  templateUrl: './location-score.component.html',
  styleUrls: ['./location-score.component.scss']
})
export class LocationScoreComponent implements OnInit {
  locationScore: FormGroup;
  scoreTotal: number;
  constructor(private scoreService: ScoreService) { }

  ngOnInit(): void {
    this.locationScore = this.createFormGroup();
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

    let score = this.locationScore.controls['location1'].value +
      this.locationScore.controls['location2'].value +
      this.locationScore.controls['location3'].value +
      this.locationScore.controls['location4'].value +
      this.locationScore.controls['location5'].value +
      this.locationScore.controls['location6'].value;

    this.scoreService.changeLocationScore(score);
    return score;

    return score;
  }

}
