import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { switchMap } from 'rxjs/operators';

import { FirebaseServiceService } from '../../services/firebase-service.service';
import { Event } from '../../models/event';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  event$;
  constructor(private firebaseService: FirebaseServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.event$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return this.firebaseService.afs.doc('countdowns/' + id).valueChanges();
      })
    );
  }

}
