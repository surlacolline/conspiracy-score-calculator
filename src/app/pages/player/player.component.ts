import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() name: string;
  isShowStepper = false;

  constructor() { }

  ngOnInit(): void {
  }
  showStepper(): void {
    this.isShowStepper = !!this.isShowStepper;
  }
}
