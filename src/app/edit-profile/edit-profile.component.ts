import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UsersService } from '../_services/users.service';
import { Users } from '../_models/users';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html', 
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  following=0;
  user:Users
  numFollower=0
  numFollowing=0

  constructor(private userService:UsersService,public ar:ActivatedRoute,public r:Router) { }
  formGroup: FormGroup | any;
  ngOnInit(): void {
    let id=0;
    this.ar.params.subscribe(
      a=>{id=a['id']
      this.userService.getProfile(id).subscribe(
        e=>{this.user=e
          console.log(e);
        })
    }
    )
    this.formGroup = new FormGroup({
      firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)]),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)
      ])
    })
   
  }
Edit(){
  let id=0;
  this.ar.params.subscribe(
    e=>{id=e['id']
  this.userService.edit(id,this.formGroup.value).subscribe
  (
      e=>{this.user=e}
  )
  }
    
   // this.userService.edit(id,)
  )
  
}
}
