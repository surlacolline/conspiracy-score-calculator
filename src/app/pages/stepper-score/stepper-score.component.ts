import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Player } from 'src/app/core/models/player.model';
import { Score } from 'src/app/core/models/score.model';
import { ScoreService } from 'src/app/core/score.service';

@Component({
  selector: 'app-stepper-score',
  templateUrl: './stepper-score.component.html',
  styleUrls: ['./stepper-score.component.scss'],


})
export class StepperScoreComponent implements OnInit {
  // @Input() name = "Henri";
  // @Input() player: Player;
  player: Player;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  @Output() stepperDoneEvent = new EventEmitter<Player>();

  constructor(private _formBuilder: FormBuilder, private scoreService: ScoreService) { }

  ngOnInit(): void {


    this.scoreService.currentScore.subscribe(player => this.player = player);
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  doneClicked() {
    this.stepperDoneEvent.emit(this.player);

  }
}


