import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import FlipDown from '../../../assets/js/flipdown_modified.js';

@Component({
  selector: 'app-flipclock',
  templateUrl: './flipclock.component.html',
  styleUrls: [
    './flipclock.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FlipclockComponent implements OnInit {
  @Input() time_unix: number;

  constructor() { }

  ngOnInit(): void {
    // var aYearsWorth = (new Date().getTime() / 1000) + 31536000;
    const cd = new FlipDown(this.time_unix).start();
  }
}

