import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: UsersService, private router: Router) { }

  formGroup: FormGroup | any;
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
  errorMessage: any;
  register(){
    console.log(this.formGroup.value)
    this.registerService.register(this.formGroup.value)
    .subscribe(
      

    );

  }

  
}
