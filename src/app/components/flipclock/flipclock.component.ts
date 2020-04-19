import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import FlipDown from '../../../assets/js/flipdown_modified.js'

@Component({
  selector: 'app-flipclock',
  templateUrl: './flipclock.component.html',
  styleUrls: [
    './flipclock.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FlipclockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2);
    var aYearsWorth = (new Date().getTime() / 1000) + 31536000;
    let cd = new FlipDown(aYearsWorth).start();
  }
}

