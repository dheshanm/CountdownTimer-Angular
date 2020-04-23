import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, FormArray} from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

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

  processForm() {
    let temp1 = this.nameFormGroup.value;
    let temp2 = this.descriptionFormGroup.value;

    this.data = {
      title: temp1['title'],
      subtitle: temp1['subtitle'],
      isFeatured: temp1['isFeatured'],
      content: temp2['content'],
      time_unix: (new Date(temp2['datetime']).getTime() / 1000) + (60*60),
      tags: this.processTags(temp2['tags'])
    }

    console.log(this.data);

    return temp2;
  }

  onSubmit() {
    this.processForm();
  }

}
