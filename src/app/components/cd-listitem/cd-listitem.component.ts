import { Component, OnInit, Input } from '@angular/core';

import { FirebaseServiceService } from "../../services/firebase-service.service"
import { Event } from '../../models/event';

@Component({
  selector: 'app-cd-listitem',
  templateUrl: './cd-listitem.component.html',
  styleUrls: ['./cd-listitem.component.scss']
})
export class CdListitemComponent implements OnInit {
  @Input() data: Event;

  constructor(private firebaseService: FirebaseServiceService) { }

  ngOnInit(): void { }

  incrementCount(item: Event): void {
    this.firebaseService.incrementCount(item);
    console.log("Incrementing");
    console.log(item);
  }
  
}
