import { Component, OnInit, ViewEncapsulation, Input, OnChanges, SimpleChanges } from '@angular/core';

import FlipDown from '../../../assets/js/flipdown_modified.js';

@Component({
  selector: 'app-flipclock',
  templateUrl: './flipclock.component.html',
  styleUrls: [
    './flipclock.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FlipclockComponent implements OnInit, OnChanges {
  @Input() time_unix: number;
  uuid: string;

  constructor() {
    this.uuid = this.makeUUID(5);
  }

  ngOnInit(): void {
    // var aYearsWorth = (new Date().getTime() / 1000) + 31536000;
    this.createTimer(this.uuid, this.time_unix);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
    let time_unix: number;

    if (changes.time_unix.previousValue != undefined) {
      console.log("flag")
      time_unix = changes.time_unix.currentValue;

      // TODO
      // Delete existing 'flipdown' element
      this.removeTimer(this.uuid);
      // Create new 'flipdown' with updated 'time_unix'
      this.createTimer(this.uuid, time_unix);
    }
  }

  removeTimer(id: string) {
    const clock = document.getElementById(id);
    clock.parentNode.removeChild(clock);
  }

  // Dynamically creates and injects 'flipdown' element
  createTimer(id: string, time_unix: number) {
    const mainDiv = document.getElementById("countdown");
    var newClock = document.createElement("div"); 

    const clockStyle = {
      margin: "2em",
    }

    // add 'flipclock' class to classList
    newClock.classList.add("flipdown");
    // Apply style
    for (let style in clockStyle) {
      newClock.style[style] = clockStyle[style];
    }
    // Set ID for new Clock
    newClock.id = id;

    // append newClock to mainDiv
    mainDiv.appendChild(newClock);

    console.log(newClock)
    console.log(mainDiv)

    // console.log(this.time_unix);

    // Reference : https://stackoverflow.com/questions/16149431/make-function-wait-until-element-exists
    function handleElement(id): void {
      let element = document.getElementById(id);
      
      const cd = new FlipDown(time_unix, id).start();
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

  makeUUID(length): string {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}

