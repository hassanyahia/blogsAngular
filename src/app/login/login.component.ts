import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from '../_services/auth.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public error: string;
  constructor(private router: Router, private auth: AuthService) { }

  formGroup: FormGroup | any;
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)
      ])
    })
  }

  submit() {
    console.log(this.formGroup.value);
    this.auth.login(this.formGroup.value.username, this.formGroup.value.password)
      .pipe(first())
      .subscribe(
        result => this.router.navigate(['home']),
        err => this.error = 'Could not authenticate'
      );
  }

}
