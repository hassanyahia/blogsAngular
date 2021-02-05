import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetAllblogsComponent } from './get-allblogs/get-allblogs.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserblogsComponent } from './userblogs/userblogs.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { GetFollowersComponent } from './get-followers/get-followers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GetFollowingComponent } from './get-following/get-following.component';

@NgModule({
  declarations: [
    AppComponent,
    GetAllblogsComponent,
    HeaderComponent,
    UserProfileComponent,
    UserblogsComponent,
    MyblogsComponent,
    GetFollowersComponent,
    GetFollowingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
