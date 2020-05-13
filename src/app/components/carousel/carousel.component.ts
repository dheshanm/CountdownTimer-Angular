import { Component, OnInit } from '@angular/core';

import { FirebaseEventService } from '../../services/firebase-event.service';

import { Event } from '../../models/event.model';
import { previewCard } from '../../models/placeholder';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: [
    './carousel.component.scss',
    '../../../assets/css/bootstrap.css'
  ]
})
export class CarouselComponent implements OnInit {
  previewCard: Event = {};
  data: Event[] = [];

  constructor(private eventService: FirebaseEventService) { }

  ngOnInit(): void {
    this.eventService.getFeaturedItems().subscribe(items => {
      this.data = items;
    });
    
    this.previewCard = previewCard;
  }

}
