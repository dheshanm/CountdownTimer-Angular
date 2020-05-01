import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page404Component } from 'src/app/components/page404/page404.component'
import { HomeComponent } from 'src/app/components/home/home.component'
import { CreateCdComponent } from 'src/app/components/create-cd/create-cd.component'
import { CdListComponent } from 'src/app/components/cd-list/cd-list.component'

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'events', component: CdListComponent},
  { path: 'events/create', component: CreateCdComponent},
  { path: '**', component: Page404Component },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
