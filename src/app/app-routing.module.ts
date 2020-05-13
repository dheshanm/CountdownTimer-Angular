import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page404Component } from 'src/app/components/page404/page404.component'
import { HomeComponent } from 'src/app/components/home/home.component'
import { CreateCdComponent } from 'src/app/components/create-cd/create-cd.component'
import { CdListComponent } from 'src/app/components/cd-list/cd-list.component'
import { EventsComponent  } from 'src/app/components/events/events.component'
import { EventDetailsComponent } from 'src/app/components/event-details/event-details.component'
import { UserDashboardComponent } from 'src/app/components/user-dashboard/user-dashboard.component';
import { UserDetailsComponent } from 'src/app/components/user-details/user-details.component';

import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'account', component: UserDashboardComponent, canActivate: [AuthGuard]},
  { path: 'user/:uid', component: UserDetailsComponent},
  { path: 'events', 
    component: EventsComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full'},
      { path: 'create', component: CreateCdComponent},
      { path: 'list', component: CdListComponent},
      { path: ':id', component: EventDetailsComponent},
      { path: '**', component: Page404Component },  // Wildcard route for a 404 page
    ]},
  { path: '**', component: Page404Component },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
