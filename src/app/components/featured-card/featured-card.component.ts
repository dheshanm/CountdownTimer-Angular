import { Component, OnInit, Input } from '@angular/core';

import { FirebaseServiceService } from "../../services/firebase-service.service";

import { Event } from '../../models/event.model';

import { incrementCount, copyID } from '../../utils'

@Component({
  selector: 'app-featured-card',
  templateUrl: './featured-card.component.html',
  styleUrls: ['./featured-card.component.scss']
})
export class FeaturedCardComponent implements OnInit {
  @Input() data: Event;
  _BASE_URL = "https://countdowntimer-angular.web.app/";

  constructor(private firebaseService: FirebaseServiceService) { }

  ngOnInit(): void {
    // console.log(this.data);

    // Check if running Locally
    this._BASE_URL = window.location.origin
  }

  incrementCountInternal(): void {
    incrementCount(this.firebaseService, this.data)
  }

  copyID(): void {
    copyID(this.data.id);
  }

}
