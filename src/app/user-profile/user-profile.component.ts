import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Users } from '../_models/users';
import { UsersService} from '../_services/users.service'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user:Users
  numFollower=0
  numFollowing=0
  blogflag:boolean=true;
  followersflag:boolean=false; 
  constructor(private userService:UsersService,public ar:ActivatedRoute,public r:Router) { }

  ngOnInit(): void {
    let id=0;
    this.ar.params.subscribe(
      a=>{id=a['id']
      this.userService.getProfile(id).subscribe(
        e=>{this.user=e
          this.numFollower=this.user.follower.length
          this.numFollowing=this.user.following.length
        })
    }
    )
  }

}
