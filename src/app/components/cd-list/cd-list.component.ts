import { Component, OnInit } from '@angular/core';

import { FirebaseEventService } from '../../services/firebase-event.service';

import { Event } from '../../models/event.model';

@Component({
  selector: 'app-cd-list',
  templateUrl: './cd-list.component.html',
  styleUrls: [
    './cd-list.component.scss',
    '../../../assets/css/bootstrap.css'
  ]
})
export class CdListComponent implements OnInit {
  data: Event[] = [];

  constructor(private eventService: FirebaseEventService) { }

  ngOnInit(): void {
    this.eventService.getItems().subscribe(items => {
      this.data = items;
    });
  }

}
