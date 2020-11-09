import { Component, OnInit } from '@angular/core';
import { TransitionCheckState } from '@angular/material/checkbox';
import { IPlayer } from 'src/app/core/models/player.model';

@Component({
  selector: 'app-list-player-scores',
  templateUrl: './list-player-scores.component.html',
  styleUrls: ['./list-player-scores.component.scss']
})
export class ListPlayerScoresComponent implements OnInit {
  players: IPlayer[] = [{ Name: "Pierre", Score: 54 }, { Name: "Charles", Score: 10 }];

  constructor() { }

  ngOnInit(): void {
  }

  addPlayer(): void {
    this.players.push({ Name: "Henri", Score: 54 });
  }

}
