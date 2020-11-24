import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorScoreComponent } from './pages/color-score/color-score.component';
import { ListPlayerScoresComponent } from './pages/list-player-scores/list-player-scores.component';
import { StepperScoreComponent } from './pages/stepper-score/stepper-score.component';

const routes: Routes = [
  { path: 'step1', component: ColorScoreComponent },
  { path: '', component: ListPlayerScoresComponent },
  { path: 'stepper', component: StepperScoreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
