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

  incrementCountInternal(): void {
    incrementCount(this.firebaseService, this.data);
  }
  
}

export function incrementCount(afs, data): void {
  let id = 'init-card';
  try {
    id = document.getElementsByClassName('active')[0].id
  }
  catch {}
  afs.incrementCount(data);
  console.log("Incrementing");

  // Reference : https://stackoverflow.com/questions/16149431/make-function-wait-until-element-exists
  function handleElement(id): void {
    let element = document.getElementById(id);
    setTimeout(() => { element.classList.add('active'); }, 100);
    console.log("Replace Sucessful");
  }

  // set up the mutation observer
  var observer = new MutationObserver(function (mutation, me) {
    // `mutations` is an array of mutations that occurred
    // `me` is the MutationObserver instance
    var element = document.getElementById(id);
    if (element) {
      handleElement(id);
      me.disconnect(); // stop observing
      return;
    }
  });

  // start observing
  observer.observe(document, {
    childList: true,
    subtree: true
  });
}
