import { Component, OnInit } from '@angular/core';

import { FirebaseServiceService } from '../../services/firebase-service.service';

// import { Event } from '../../models/event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: [
    './events.component.scss',
    '../../../assets/css/bootstrap.css'
  ]
})
export class EventsComponent implements OnInit {
  // data: Event[] = [];

  constructor(private firebaseService: FirebaseServiceService) { }

  ngOnInit(): void {
    // this.firebaseService.getItems().subscribe(items => {
    //   this.data = items;
    // });
  }

}
