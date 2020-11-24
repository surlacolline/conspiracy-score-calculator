import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ScoreInputComponent } from './components/score-input/score-input.component';



@NgModule({
  declarations: [ScoreInputComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    ScoreInputComponent
  ]
})
export class SharedModule { }
