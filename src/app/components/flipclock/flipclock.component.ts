import { Component, OnInit } from '@angular/core';
import FlipClock from 'flipclock';
import "jquery";

@Component({
  selector: 'app-flipclock',
  templateUrl: './flipclock.component.html',
  styleUrls: ['./flipclock.component.scss']
})
export class FlipclockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let currentDate = new Date();
    let futureDate  = new Date(currentDate.getFullYear() + 1, 0, 1);

    let diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

    const clock = document.getElementById('clock');

    const cd = new FlipClock(clock, diff, {
      clockFace: 'DailyCounter',
      countdown: true
    });
  }

}

