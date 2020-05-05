import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { switchMap } from 'rxjs/operators';

import { FirebaseEventService } from '../../services/firebase-event.service';

import { Event } from '../../models/event.model';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  event: Observable<Event>;
  constructor(private eventService: FirebaseEventService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.event = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return this.eventService.afs.doc('countdowns/' + id).valueChanges();
      })
    );
  }

}
