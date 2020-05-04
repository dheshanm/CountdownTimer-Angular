import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, FormArray} from '@angular/forms';
import { Router } from '@angular/router';

import { FirebaseServiceService } from '../../services/firebase-service.service'

import { Event } from '../../models/event';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../models/user.model';

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
  checked = false;
  nameFormGroup: FormGroup;
  descriptionFormGroup: FormGroup;
  
  data: Event;

  constructor(private fb: FormBuilder, private firebaseService: FirebaseServiceService, private auth: AuthService, private router: Router) { }

  ngOnInit(): void { 
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

    this.data = {
      title: "Preview Title",
      subtitle: "Sample Subtitle",
      count: 1,
      content: "Sample Content",
      time_unix: (new Date().getTime() / 1000) + (60*60*24),
      tags: ["Tag 1", "Tag 2"]
    }
  }

  processTags(tags: string): string[] {
    const seperatedBySpace: string[] = tags.split(' ');
    const separatedByComma: string[] = tags.split(',');
    
    // Check which delimiter has more Tags and use one with more Tags
    return (seperatedBySpace.length < separatedByComma.length) ? separatedByComma : seperatedBySpace; 
  }

  validate(data: Event): boolean{
    let flag = true;

    // Check if Required Fields are not empty.
    if (data.title == '' || data.subtitle == '' || data.time_unix == null) {
      flag = false;
    }
    return flag;
  }

  processForm(toSubmit: Boolean) {
    let nameForm = this.nameFormGroup.value;
    let descriptionForm = this.descriptionFormGroup.value;

    this.data = {
      title: nameForm['title'],
      subtitle: nameForm['subtitle'],
      isFeatured: nameForm['isFeatured'],
      count: 1,
      content: descriptionForm['content'],
      time_unix: (new Date(descriptionForm['datetime']).getTime() / 1000) + (60*60),
      tags: this.processTags(descriptionForm['tags'])
    }

    if(!toSubmit){
    } else {
      if (this.validate(this.data)) {
        const id = this.firebaseService.addItem(this.data);
        // Add UID to User model ONLY if logged in
        if (this.auth.getUser()) {
          let user: User;
          id.then(id => {
            this.auth.user$.subscribe(data => {
              user = data;
              // Check if User model has Events Instantiated
              if (typeof(user.events) == "undefined") {
                user.events = [];
              }
              // Prevent Recursive caliing of Push
              if (!user.events.includes(id)){
                user.events.push(id);
                this.auth.updateUserData(user);
              }
            });
            // Redirect to the Event's Page
            this.router.navigate([`/events/${id}`]);
          });
        } 
        // For Un Aunthenticated Users
        else {
          let user: User;
          id.then(id => {
            this.auth.guest$.subscribe(data => {
              user = data;
              if (typeof(user.events) == "undefined") {
                user.events = [];
              }
              // Prevent Reccursive Callbacks
              if (!user.events.includes(id)){
                user.events.push(id);
                this.auth.updateUserData(user);
              };
            });
            // Redirect to the Event's Page
            this.router.navigate([`/events/${id}`]);
          });
        }
      }
      else {
        console.log("Validation failed");
      }
    }

    return descriptionForm;
  }

  onSubmit() {
    this.processForm(true);
  }

  onPreview() {
    this.processForm(false);
  }

}
