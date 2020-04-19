import { Component, OnInit } from '@angular/core';

import { Event } from '../../models/event';

@Component({
  selector: 'app-featured-card',
  templateUrl: './featured-card.component.html',
  styleUrls: ['./featured-card.component.scss']
})
export class FeaturedCardComponent implements OnInit {

  data: Event = {};

  constructor() { }

  ngOnInit(): void {
    this.data.title = 'Westworld S03E8 Passed Down';
    this.data.subtitle = 'Wetworld HBO';
    this.data.content = 'A real friend is one who walks in when the rest of the world walks out.';
    this.data.time_unix = 1618849541;
    this.data.tags = ['HBO', 'Westworld', 'TV Shows'];

    console.log(this.data);
  }

}
