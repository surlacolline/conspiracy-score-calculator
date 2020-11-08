import { Component, OnInit } from '@angular/core';
import { TransitionCheckState } from '@angular/material/checkbox';

@Component({
  selector: 'app-list-player-scores',
  templateUrl: './list-player-scores.component.html',
  styleUrls: ['./list-player-scores.component.scss']
})
export class ListPlayerScoresComponent implements OnInit {
  players: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addPlayer(): void {
    this.players.push("Henri");
  }

}
