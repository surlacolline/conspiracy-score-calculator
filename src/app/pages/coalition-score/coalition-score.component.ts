import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/core/score.service';

@Component({
  selector: 'app-coalition-score',
  templateUrl: './coalition-score.component.html',
  styleUrls: ['./coalition-score.component.scss']
})
export class CoalitionScoreComponent implements OnInit {

  constructor(private scoreService: ScoreService) { }

  ngOnInit(): void {
  }

}
