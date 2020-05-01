import { Component, OnInit, Input } from '@angular/core';
import {FirebaseServiceService} from "../../services/firebase-service.service";

import { Event } from '../../models/event';

@Component({
  selector: 'app-featured-card',
  templateUrl: './featured-card.component.html',
  styleUrls: ['./featured-card.component.scss']
})
export class FeaturedCardComponent implements OnInit {
  @Input() data: Event;

  constructor(private firebaseService: FirebaseServiceService) { }

  ngOnInit(): void {
    // console.log(this.data);
  }

  incrementCountInternal(): void {
    incrementCount(this.firebaseService, this.data)
  }

}

export function incrementCount(afs, data): void {
  afs.incrementCount(data);
  console.log("Incrementing");

  let id = data.id;
  console.log(id)

  function handleError(id){
    let element = document.getElementById(id);
    if (element.classList.contains("active")){
      console.log("Replace Sucessful");
    } else {
      // console.log(element.classList);
      setTimeout(() => { handleError(id); }, 100);
      element.classList.add('active');
    }
  }

  // Reference : https://stackoverflow.com/questions/16149431/make-function-wait-until-element-exists
  function handleElement(id): void {
    let element = document.getElementById(id);
    setTimeout(() => { handleError(id); }, 100);
    element.classList.add('active');
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