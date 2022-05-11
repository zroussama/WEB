import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ReadProfileComponent } from './read-profile/read-profile.component';
import { MainProfileComponent } from './Front/main-profile/main-profile.component';


const routes: Routes = [
  {path:"",redirectTo:"ManageProfile",pathMatch:"full"},
  {path: 'viewProfile',component : ReadProfileComponent},
  {path: 'ManageProfile',component : ProfileComponent},
  {path: 'home',component : HomeComponent},
  {path: 'profile/:id',component : MainProfileComponent},

  //Wild Card Route for 404 request
  { path: '**', pathMatch: 'full',
  component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
