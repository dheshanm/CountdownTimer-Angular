import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import FlipDown from '../../../assets/js/flipdown_modified.js';

@Component({
  selector: 'app-flipclock',
  templateUrl: './flipclock.component.html',
  styleUrls: [
    './flipclock.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FlipclockComponent implements OnInit {
  @Input() time_unix: number;
  uuid: string;

  constructor() {
    this.uuid = this.makeUUID(5);
  }

  ngOnInit(): void {
    let id = `flipdown-${this.uuid}`;
    let time_unix = this.time_unix;

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


    // var aYearsWorth = (new Date().getTime() / 1000) + 31536000;
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

