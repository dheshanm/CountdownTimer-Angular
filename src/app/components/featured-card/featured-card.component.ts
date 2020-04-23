import { Component, OnInit, Input } from '@angular/core';
import {FirebaseServiceService} from "../../services/firebase-service.service";

import { Event } from '../../models/event';

@Component({
  selector: 'app-featured-card',
  templateUrl: './featured-card.component.html',
  styleUrls: ['./featured-card.component.scss']
})
export class FeaturedCardComponent implements OnInit {
  @Input() data: Event;

  constructor(private firebaseService: FirebaseServiceService) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  incrementCount(item: Event): void {
    this.firebaseService.incrementCount(item);
    console.log("Incrementing");
    console.log(item);
  }

}
