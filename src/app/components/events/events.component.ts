import { Component, OnInit } from '@angular/core';

// import { FirebaseEventService } from '../../services/firebase-event.service';

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

  constructor(
    // private eventService: FirebaseEventService,
  ) { }

  ngOnInit(): void {
    // this.eventService.getItems().subscribe(items => {
    //   this.data = items;
    // });
  }

}
