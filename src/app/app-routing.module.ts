import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page404Component } from 'src/app/components/page404/page404.component'
import { HomeComponent } from 'src/app/components/home/home.component'


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: '**', component: Page404Component },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
