import { Component, OnInit } from '@angular/core';
import { TransitionCheckState } from '@angular/material/checkbox';
import { IPlayer } from 'src/app/core/models/player.model';

@Component({
  selector: 'app-list-player-scores',
  templateUrl: './list-player-scores.component.html',
  styleUrls: ['./list-player-scores.component.scss']
})
export class ListPlayerScoresComponent implements OnInit {
  players: IPlayer[] = [{ name: "Pierre", score: 54 }, { name: "Charles", score: 10 }];

  constructor() { }

  ngOnInit(): void {
  }

  addPlayer(): void {
    this.players.push({ name: "Henri", score: 54 });
  }

}
