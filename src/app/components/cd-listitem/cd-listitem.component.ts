import { Component, OnInit, Input } from '@angular/core';

import { Event } from '../../models/event';

@Component({
  selector: 'app-cd-listitem',
  templateUrl: './cd-listitem.component.html',
  styleUrls: ['./cd-listitem.component.scss']
})
export class CdListitemComponent implements OnInit {
  @Input() data: Event;

  constructor() { }

  ngOnInit(): void { }
  
}
