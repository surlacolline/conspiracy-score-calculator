import { Component, OnInit } from '@angular/core';
import { TransitionCheckState } from '@angular/material/checkbox';
import { Player } from 'src/app/core/models/player.model';
import { Score } from 'src/app/core/models/score.model';

@Component({
  selector: 'app-list-player-scores',
  templateUrl: './list-player-scores.component.html',
  styleUrls: ['./list-player-scores.component.scss']
})
export class ListPlayerScoresComponent implements OnInit {
  players: Player[] = [{ name: "Pierre", score: new Score() }, { name: "Charles", score: new Score() }];

  constructor() { }

  ngOnInit(): void {
  }

  addPlayer(name: string): void {
    this.players.push({ name: name, score: new Score() });
  }

}
