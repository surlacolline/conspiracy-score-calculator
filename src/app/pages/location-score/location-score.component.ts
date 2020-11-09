import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-score',
  templateUrl: './location-score.component.html',
  styleUrls: ['./location-score.component.scss']
})
export class LocationScoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getScore(l1: string, l2: string, l3: string, l4: string, l5: string, l6: string): number {

    let n1 = parseInt(l1, 10) || 0;
    let n2 = parseInt(l2, 10) || 0;
    let n3 = parseInt(l3, 10) || 0;
    let score = 0;
    score = n1 + n2 + n3;

    return score;
  }

}
