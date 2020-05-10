import { Component, OnInit, Input } from '@angular/core';

import { FirebaseEventService } from '../../services/firebase-event.service';

import { Event } from '../../models/event.model';

@Component({
  selector: 'app-cd-list',
  templateUrl: './cd-list.component.html',
  styleUrls: ['./cd-list.component.scss']
})
export class CdListComponent implements OnInit {
  @Input() usePassedData?: boolean = false;
  @Input() passedData?: Event[];

  data: Event[] = [];

  constructor(private eventService: FirebaseEventService) { }

  ngOnInit(): void {
    if (!this.usePassedData) {
      this.eventService.getItems().subscribe(items => {
        this.data = items;
      });
    } else {
      console.log(this.passedData);
      this.data = this.passedData;
    }
  }

}
