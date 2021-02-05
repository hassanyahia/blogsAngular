import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetAllblogsComponent } from './get-allblogs/get-allblogs.component';
import { GetFollowersComponent } from './get-followers/get-followers.component';
import { GetFollowingComponent } from './get-following/get-following.component';

import { MyblogsComponent } from './myblogs/myblogs.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserblogsComponent } from './userblogs/userblogs.component';

const routes: Routes = [
  {path:'home',component:GetAllblogsComponent},
  {path:'users/:id',component:UserProfileComponent},
  {path:'blogs/:id',component:UserblogsComponent},
  {path:'blogs',component:MyblogsComponent},
  {path:'users/followers/:id',component:GetFollowersComponent},
{path:'users/following/:id',component:GetFollowingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
