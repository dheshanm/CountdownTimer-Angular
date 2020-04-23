import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, FormArray} from '@angular/forms';

import { FirebaseServiceService } from '../../services/firebase-service.service'

import { Event } from '../../models/event';

@Component({
  selector: 'app-create-cd',
  templateUrl: './create-cd.component.html',
  styleUrls: [
    './create-cd.component.scss',
    '../bootstrap.css'
  ]
})
export class CreateCdComponent implements OnInit {
  isLinear = false;
  nameFormGroup: FormGroup;
  descriptionFormGroup: FormGroup;
  
  data: Event;

  constructor(private fb: FormBuilder, private firebaseService: FirebaseServiceService) { }

  ngOnInit(): void { 
    this.nameFormGroup = this.fb.group({
      title: ['Title'],
      subtitle: ['Subtitle'],
      isFeatured: ['false']
    });

    this.descriptionFormGroup = this.fb.group({
      content: ['Sample Content'],
      tags: [''],
      datetime: [''],
    });

    this.data = {
      title: "Title",
      subtitle: "Subtitle",
      count: 1,
      content: "Sample Content",
      time_unix: (new Date().getTime() / 1000) + (60*60*24),
      tags: ["Tag 1", "Tag 2"]
    }
  }

  processTags(tags: string): string[] {
    let out1: string[] = tags.split(' ');
    let out2: string[] = tags.split('.');
    
    if (out1.length > out2.length){
      return out1;
    } else {
      return out2;
    }
  }

  validate(data: Event): boolean{
    let flag = true;

    if (data.title == '' || data.subtitle == '' || data.time_unix == null) {
      flag = false;
    }
    return flag;
  }

  processForm(bool) {
    let temp1 = this.nameFormGroup.value;
    let temp2 = this.descriptionFormGroup.value;

    this.data = {
      title: temp1['title'],
      subtitle: temp1['subtitle'],
      isFeatured: temp1['isFeatured'],
      count: 1,
      content: temp2['content'],
      time_unix: (new Date(temp2['datetime']).getTime() / 1000) + (60*60),
      tags: this.processTags(temp2['tags'])
    }

    if(!bool){
      console.log(this.data);
    } else {
      if (this.validate(this.data)) {
        this.firebaseService.addItem(this.data);
        console.log("Sucessfullt submitted");
      }
      else {
        console.log("Validation failed");
      }
    }

    return temp2;
  }

  onSubmit() {
    this.processForm(true);
  }

  onPreview() {
    this.processForm(false);
  }

}
