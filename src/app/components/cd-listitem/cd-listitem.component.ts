import { Component, OnInit, Input } from '@angular/core';

import { FirebaseEventService } from "../../services/firebase-event.service"

import { Event } from '../../models/event.model';

import { incrementCount, copyID } from '../../utils'

@Component({
  selector: 'app-cd-listitem',
  templateUrl: './cd-listitem.component.html',
  styleUrls: ['./cd-listitem.component.scss']
})
export class CdListitemComponent implements OnInit {
  @Input() data: Event;
  username: string;
  userImage: string;
  userUrl: string;

  constructor(private eventService: FirebaseEventService) { }

  ngOnInit(): void {
    // setup URL to user page
    this.userUrl = `/user/${this.data.userID}`;

    // get User PhotoUrl
    this.eventService.getUserByUID(this.data.userID).then(user => {
      this.userImage = user.photoURL;
      this.username = user.displayName;
    })
  }

  incrementCountInternal(): void {
    incrementCount(this.eventService, this.data);
  }

  // Wrapper function for copyID from utils
  copyID(): void {
    // Call copyID from utils
    copyID(this.data.id);
  }
  
}
