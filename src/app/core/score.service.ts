import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Player } from './models/player.model';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private player = new BehaviorSubject<Player>(new Player());
  currentScore = this.player.asObservable();




  constructor() {

  }



  public changeScore(player: Player) {

    this.player.next(player);
  }

}
