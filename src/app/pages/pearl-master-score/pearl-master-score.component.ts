import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ScoreService } from 'src/app/core/score.service';

@Component({
  selector: 'app-pearl-master-score',
  templateUrl: './pearl-master-score.component.html',
  styleUrls: ['./pearl-master-score.component.scss']
})
export class PearlMasterScoreComponent implements OnInit {
  isMaster: boolean = false;

  constructor(private scoreService: ScoreService) { }

  ngOnInit(): void {
  }

  getScore(isMaster: MatCheckboxChange): number {

    if (isMaster.checked) {
      this.scoreService.changePearlMasterScore(5);
      this.isMaster = true;
      return 5;
    }
    this.scoreService.changePearlMasterScore(0);
    this.isMaster = false;
    return 0;

  }

  getColor() {
    if (this.isMaster) {
      return "primary";
    } else {
      return "";
    }

  }

}
