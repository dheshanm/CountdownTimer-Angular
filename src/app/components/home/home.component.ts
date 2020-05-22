import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss',
    '../../../assets/css/bootstrap.css'
  ]
})
export class HomeComponent implements OnInit {
  eventsToFetch: number;

  constructor() {
    // Define the number of Events to consider under the 'Top Countdowns' section
    this.eventsToFetch = 5;
  }

  ngOnInit(): void {
  }

}
