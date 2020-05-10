import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import { FirebaseEventService } from 'src/app/services/firebase-event.service';

import { Event } from '../../models/event.model';
import { User } from '../../models/user.model';
import { placeholderUser } from '../../models/placeholder';

import { switchMap } from 'rxjs/operators';
import { copyUserID } from 'src/app/utils';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: [
    './user-details.component.scss',
    '../../../assets/css/bootstrap.css'
  ]
})
export class UserDetailsComponent implements OnInit {
  user: User;
  userEvents: Event[];

  constructor(private auth: AuthService, private eventService: FirebaseEventService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = placeholderUser;
    this.userEvents = [];

    let userObservable = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('uid');
        return this.auth.afs.doc('users/' + id).valueChanges();
      })
    );

    userObservable.subscribe(data => {
      this.user = data as User;
      for( let eventID of this.user.events ){
        this.eventService.getItemByID(eventID).then(event => {
          if (event != undefined) {
            this.userEvents.push(event);
          }
        });
      }
    })
  }

    // Wrapper function for copyUserID from utils
    copyUserID(): void{
      // Call copyUserID from utils
      copyUserID(this.user.uid);
    }

}
