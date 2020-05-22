import { Component, OnInit, Input } from '@angular/core';

import { FirebaseEventService } from '../../services/firebase-event.service';

import { Event } from '../../models/event.model';

@Component({
  selector: 'app-cd-list',
  templateUrl: './cd-list.component.html',
  styleUrls: ['./cd-list.component.scss']
})
export class CdListComponent implements OnInit {
  @Input() toFetch?: number;
  @Input() usePassedData?: boolean = false;
  @Input() passedData?: Event[];

  data: Event[] = [];

  constructor(private eventService: FirebaseEventService) { }

  ngOnInit(): void {
    if (this.usePassedData) {
      // If usePassedData param is defined,
      // Instantiate the component with the data passed in without fetching
      // from DB. 
      this.data = this.passedData;
    } else if (this.toFetch) {
      // if toFetch is defined,
      // Fetch only the number of Events Specified from DB
      this.eventService.getTopCountdowns(this.toFetch).subscribe(items => {
        this.data = items;
      });
    } else {
      // Fetch all Events from DB
      this.eventService.getItems().subscribe(items => {
        this.data = items;
      });
    }
  }

}
