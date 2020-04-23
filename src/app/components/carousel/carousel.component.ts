import { Component, OnInit } from '@angular/core';

import { FirebaseServiceService } from '../../services/firebase-service.service';
import { Event } from '../../models/event';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: [
    './carousel.component.scss',
    '../bootstrap.css'
  ]
})
export class CarouselComponent implements OnInit {
  init: Event = {};
  data: Event[] = [];

  constructor(private firebaseService: FirebaseServiceService) { }

  ngOnInit(): void {
    this.firebaseService.getFeaturedItems().subscribe(items => {
      this.data = items;
    });
    
    this.init = {
      title: 'Game of Thrones',
      subtitle: 'HBO',
      content: 'Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men.',
      time_unix: 1600049541,
      tags: ['HBO', 'GOT', 'TV Shows']
    }
  }

}
