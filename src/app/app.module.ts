import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { AuthService } from './_services/auth.service';
import { AuthGuard } from './auth.guard';
import { JwtInterceptor, JwtModule } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetAllblogsComponent } from './get-allblogs/get-allblogs.component';
import { HeaderComponent } from './header/header.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserblogsComponent } from './userblogs/userblogs.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { GetFollowersComponent } from './get-followers/get-followers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GetFollowingComponent } from './get-following/get-following.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PostBlogComponent } from './post-blog/post-blog.component';
import { ResultFromSearchComponent } from './result-from-search/result-from-search.component';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    GetAllblogsComponent,
    HeaderComponent,
    UserProfileComponent,
    UserblogsComponent,
    MyblogsComponent,
    GetFollowersComponent,
    GetFollowingComponent,
    LoginComponent,
    RegisterComponent,
    PostBlogComponent,
    ResultFromSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      }
    })
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
