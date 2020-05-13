import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, FormArray} from '@angular/forms';
import { Router } from '@angular/router';

import { FirebaseEventService } from '../../services/firebase-event.service'
import { AuthService } from 'src/app/services/auth.service';

import { Event } from '../../models/event.model';
import { User } from '../../models/user.model';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-cd',
  templateUrl: './create-cd.component.html',
  styleUrls: [
    './create-cd.component.scss',
    '../../../assets/css/bootstrap.css'
  ]
})
export class CreateCdComponent implements OnInit {
  isLinear = false;
  isFeaturedDefault = false;
  nameFormGroup: FormGroup;
  descriptionFormGroup: FormGroup;
  
  data: Event;

  constructor(private fb: FormBuilder, private eventService: FirebaseEventService, private auth: AuthService, private router: Router) { }

  ngOnInit(): void { 

    // Initialize FormGroups with Default Values to be Displayed
    this.nameFormGroup = this.fb.group({
      title: ['Preview Title'],
      subtitle: ['Sample Subtitle'],
      isFeatured: ['false']
    });

    this.descriptionFormGroup = this.fb.group({
      content: ['Sample Content'],
      tags: [''],
      datetime: [(new Date().getTime() / 1000)],
    });

    // Placeholder data
    this.data = {
      title: "Preview Title",
      subtitle: "Sample Subtitle",
      count: 1,
      content: "Sample Content",
      time_unix: (new Date().getTime() / 1000) + (60*60*24),
      tags: ["Tag 1", "Tag 2"]
    }
  }

  // Converts raw string to an Array or Tags
  processTags(tags: string): string[] {
    const seperatedBySpace: string[] = tags.split(' ');
    const separatedByComma: string[] = tags.split(',');
    
    // Check which delimiter has more Tags and use one with more Tags
    return (seperatedBySpace.length < separatedByComma.length) ? separatedByComma : seperatedBySpace; 
  }

  // Validate the contents of the form before submission to FS
  validate(data: Event): boolean{
    let flag = true;

    // Check if Required Fields are not empty.
    if (data.title == '' || data.subtitle == '' || data.time_unix == null) {
      flag = false;
    }
    return flag;
  }

  processForm(toSubmit: Boolean): void {
    let nameForm = this.nameFormGroup.value;
    let descriptionForm = this.descriptionFormGroup.value;
    let currentUserID = 'guest-user'
    let isLoggedIn: boolean = false;

    if (this.auth.getUser()) {
      isLoggedIn = true;
      currentUserID = this.auth.getUserID();
    }

    // Destructure the FormGroup data
    this.data = {
      title: nameForm['title'],
      subtitle: nameForm['subtitle'],
      isFeatured: nameForm['isFeatured'],
      count: 1,
      content: descriptionForm['content'],
      time_unix: (new Date(descriptionForm['datetime']).getTime() / 1000) + (60*60),
      tags: this.processTags(descriptionForm['tags']),
      userID: currentUserID,
    }

    // DO NOT execute this if for preview only
    // This part submits data to the FS Database
    if(toSubmit){
      if (this.validate(this.data)) {
        const id = this.eventService.addItemAsync(this.data);
        // Add UID to User model ONLY if logged in
        if (isLoggedIn) {
          id.then(id => {
            this.updateUser(this.auth.user$, id);
          });
        } 
        // For Un Aunthenticated Users
        else {
          id.then(id => {
            this.updateUser(this.auth.guest$, id);
          });
        }
      }
      else {
        console.log("Validation failed");
      }
    }
  }

  // Append the EventID to the User model
  updateUser(userObservable: Observable<User>, eventID: string) {
    let user: User;
    userObservable.subscribe(data => {
      user = data;
      // Check if User model has Events Instantiated
      if (typeof(user.events) == "undefined") {
        user.events = [];
      }
      // Prevent Recursive caliing of Push
      if (!user.events.includes(eventID)){
        user.events.push(eventID);
        this.auth.updateUserData(user);
      }
    });
    // Redirect to the Event's Page
    this.router.navigate([`/events/${eventID}`]);
  }

  // Submits the data to DB and redirects to Ecent Details page
  onSubmit() {
    this.processForm(true);
  }

  // Updates only the Displayed Preview Card
  onPreview() {
    this.processForm(false);
  }

}
