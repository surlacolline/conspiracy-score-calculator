import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ScoreService } from 'src/app/core/score.service';

@Component({
  selector: 'app-color-score',
  templateUrl: './color-score.component.html',
  styleUrls: ['./color-score.component.scss']
})
export class ColorScoreComponent implements OnInit {
  colorScore: FormGroup;

  constructor(private scoreService: ScoreService) { }

  ngOnInit(): void {
    this.colorScore = this.createFormGroup();
  }
  createFormGroup() {
    return new FormGroup({
      blue: new FormControl(0, Validators.max(6)),
      red: new FormControl(0, Validators.max(6)),
      yellow: new FormControl(0, Validators.max(6)),
      green: new FormControl(0, Validators.max(6)),
      purple: new FormControl(0, Validators.max(6)),
    });
  }
  getScore(): number {

    let score = this.colorScore.controls['blue'].value +
      this.colorScore.controls['red'].value +
      this.colorScore.controls['yellow'].value +
      this.colorScore.controls['green'].value +
      this.colorScore.controls['purple'].value;

    this.scoreService.changeScore(score);
    return score;
  }

}
