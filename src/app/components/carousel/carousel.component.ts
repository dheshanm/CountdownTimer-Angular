import { Component, OnInit } from '@angular/core';

import { Event } from '../../models/event';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  init: Event = {};
  data: Event[] = [];

  constructor() { }

  ngOnInit(): void {
    this.init = {
      title: 'Game of Thrones Re-run',
      subtitle: 'HBO',
      content: 'Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men.',
      time_unix: 1600049541,
      tags: ['HBO', 'GOT', 'TV Shows']
    }

    for(let i = 0; i<3; i++){
      let temp: Event = {};

      temp.title = 'Westworld S03E8 Passed Down';
      temp.subtitle = 'Wetworld HBO';
      temp.content = 'A real friend is one who walks in when the rest of the world walks out.';
      temp.time_unix = 1618849541;
      temp.tags = ['HBO', 'Westworld', 'TV Shows'];

      this.data.push(temp)
    }
  }

}
