import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SelectPlayerComponent } from './pages/select-player/select-player.component';
import { ColorScoreComponent } from './pages/color-score/color-score.component';
import { LocationScoreComponent } from './pages/location-score/location-score.component';
import { CoalitionScoreComponent } from './pages/coalition-score/coalition-score.component';
import { PearlMasterScoreComponent } from './pages/pearl-master-score/pearl-master-score.component';
import { ListPlayerScoresComponent } from './pages/list-player-scores/list-player-scores.component';
import { StepperScoreComponent } from './pages/stepper-score/stepper-score.component';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PlayerComponent } from './pages/player/player.component';


@NgModule({
  declarations: [
    AppComponent,
    SelectPlayerComponent,
    ColorScoreComponent,
    LocationScoreComponent,
    CoalitionScoreComponent,
    PearlMasterScoreComponent,
    ListPlayerScoresComponent,
    StepperScoreComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    SharedModule,
    ReactiveFormsModule
  ], exports: [ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
