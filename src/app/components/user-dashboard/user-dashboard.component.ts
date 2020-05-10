import { Component, OnInit } from '@angular/core';

import { FirebaseEventService } from '../../services/firebase-event.service'
import { AuthService } from 'src/app/services/auth.service';

import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  userData: User;

  constructor(private eventService: FirebaseEventService, private auth: AuthService) { }

  ngOnInit(): void {
    // Initialize with placeholder data
    this.userData = {
      displayName: 'Loading...',
      email: 'Loading...',
      photoURL: '',
      uid: 'Loading...'
    };

  this.auth.user$.subscribe(data => {
    this.userData = data;
  });
  }

}
