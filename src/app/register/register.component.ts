import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formGroup: FormGroup | any;
  formData = new FormData();
  constructor(private registerService: UsersService, private router: Router, private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      userImg: [''],
      firstname: [''],
      lastname: [''],
      email: [''],
      username: [''],
      password: ['']
    });
  }


  ngOnInit(): void {
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

  register() {
    this.formData.append('firstname', this.formGroup.get('firstname').value);
    this.formData.append('lastname', this.formGroup.get('lastname').value);
    this.formData.append('email', this.formGroup.get('email').value);
    this.formData.append('username', this.formGroup.get('username').value);
    this.formData.append('password', this.formGroup.get('password').value);
    console.log(this.formData)
    this.registerService.register(this.formData)
    .subscribe(
      e=>{
        console.log(this.formData)
      console.log(e)
      }
    );

  }
 
  
}
