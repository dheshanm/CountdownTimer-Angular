import { Component, OnInit } from '@angular/core';

import { FirebaseServiceService } from '../../services/firebase-service.service';
import { Event } from '../../models/event';

@Component({
  selector: 'app-cd-list',
  templateUrl: './cd-list.component.html',
  styleUrls: ['./cd-list.component.scss']
})
export class CdListComponent implements OnInit {
  data: Event[] = [];

  constructor(private firebaseService: FirebaseServiceService) { }

  ngOnInit(): void {
    this.firebaseService.getItems().subscribe(items => {
      this.data = items;
    });
  }

}