import { Component, OnInit, Input } from '@angular/core';

import { Event } from '../../models/event';

@Component({
  selector: 'app-featured-card',
  templateUrl: './featured-card.component.html',
  styleUrls: ['./featured-card.component.scss']
})
export class FeaturedCardComponent implements OnInit {
  @Input() data: Event;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
