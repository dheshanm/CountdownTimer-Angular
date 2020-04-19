import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AvatarModule } from 'ngx-avatar';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FlipclockComponent } from './components/flipclock/flipclock.component';
import { FeaturedCardComponent } from './components/featured-card/featured-card.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FlipclockComponent,
    FeaturedCardComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule,
    AvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
