import { Component, OnInit } from '@angular/core';

import { Event } from '../../models/event';

@Component({
  selector: 'app-cd-list',
  templateUrl: './cd-list.component.html',
  styleUrls: ['./cd-list.component.scss']
})
export class CdListComponent implements OnInit {
  data: Event[] = [];

  constructor() { }

  ngOnInit(): void {
    for(let i = 0; i<3; i++){
      let temp: Event = {};

      temp.title = 'Westworld S03E8 Passed Down';
      temp.subtitle = 'Wetworld HBO';
      temp.content = 'Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men.';
      temp.time_unix = 1618849541;
      temp.tags = ['HBO', 'Westworld', 'TV Shows'];

      this.data.push(temp)
    }
  }

}
