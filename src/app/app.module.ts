import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AvatarModule } from 'ngx-avatar';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { FlipclockComponent } from './components/flipclock/flipclock.component';
import { FeaturedCardComponent } from './components/featured-card/featured-card.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CdListComponent } from './components/cd-list/cd-list.component';
import { CdListitemComponent } from './components/cd-listitem/cd-listitem.component';
import { Page404Component } from './components/page404/page404.component';
import { HomeComponent } from './components/home/home.component';
import { CreateCdComponent } from './components/create-cd/create-cd.component';

// Firebase and Firestore Imports
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment.prod';

// Services
import {FirebaseServiceService} from './services/firebase-service.service';

@NgModule({
  declarations: [
    AppComponent,
    FlipclockComponent,
    FeaturedCardComponent,
    CarouselComponent,
    CdListComponent,
    CdListitemComponent,
    Page404Component,
    HomeComponent,
    CreateCdComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule,
    MatDividerModule,
    MatStepperModule,
    MatFormFieldModule,
    MatCheckboxModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    AvatarModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'countdowntimer-angular'),
    AngularFirestoreModule
  ],
  providers: [FirebaseServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
