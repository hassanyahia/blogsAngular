import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetAllblogsComponent } from './get-allblogs/get-allblogs.component';
import { GetFollowersComponent } from './get-followers/get-followers.component';
import { GetFollowingComponent } from './get-following/get-following.component';
import { LoginComponent } from './login/login.component';
import {ResultFromSearchComponent} from './result-from-search/result-from-search.component'

import { MyblogsComponent } from './myblogs/myblogs.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserblogsComponent } from './userblogs/userblogs.component';
import { AuthGuard } from './auth.guard';
import { PostBlogComponent } from './post-blog/post-blog.component';

const routes: Routes = [
  { path: 'home', component: GetAllblogsComponent },
  { path: 'users/add', component: RegisterComponent},
  { path: 'users/login', component: LoginComponent },
  {path:'users/:id',component:UserProfileComponent},
  {path:'blogs/search/:title',component:ResultFromSearchComponent},
  { path: 'blogs/add', component: PostBlogComponent },
  { path: 'blogs/:id', component: UserblogsComponent },
  { path: 'blogs/', component: MyblogsComponent, canActivate: [AuthGuard] },
  {path:'users/followers/:id',component:GetFollowersComponent},
{path:'users/following/:id',component:GetFollowingComponent},
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
