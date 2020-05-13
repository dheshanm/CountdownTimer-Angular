import { Component, OnInit, Input } from '@angular/core';

import { FirebaseEventService } from "../../services/firebase-event.service";

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
  username: string;
  userImage: string;
  userUrl: string;

  constructor(private firebaseService: FirebaseEventService) { }

  ngOnInit(): void {
    // console.log(this.data);

    // Check if running Locally
    this._BASE_URL = window.location.origin;

    // setup URL to user page
    this.userUrl = `/user/${this.data.userID}`;

    // get User PhotoUrl
    this.firebaseService.getUserByUID(this.data.userID).then(user => {
      this.userImage = user.photoURL;
      this.username = user.displayName;
    })
  }

  incrementCountInternal(): void {
    incrementCount(this.firebaseService, this.data)
  }

  copyID(): void {
    copyID(this.data.id);
  }

}
