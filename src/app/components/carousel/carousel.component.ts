import { Component, OnInit } from '@angular/core';

import { FirebaseServiceService } from '../../services/firebase-service.service';
import { Event } from '../../models/event';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: [
    './carousel.component.scss',
    '../../../assets/css/bootstrap.css'
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
      title: 'The Next Day',
      subtitle: 'Preview Card',
      content: 'This is a Preview card, with Dummy data. This is kept here to check if all things are loaded and displayed properly. This card will be removed when Development is complte and is Deployed.',
      count: 12,
      time_unix: (new Date().getTime() / 1000) + (60*60*24),
      tags: ['Preview', '24 Hr Countdown', 'Dummy']
    }
  }

}
