import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScoreService } from 'src/app/core/score.service';

@Component({
  selector: 'app-stepper-score',
  templateUrl: './stepper-score.component.html',
  styleUrls: ['./stepper-score.component.scss'],
  providers: [ScoreService]
})
export class StepperScoreComponent implements OnInit {
  @Input() name = "Henri";
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}


