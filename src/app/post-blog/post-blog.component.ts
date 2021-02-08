import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from "@angular/forms";
import { AuthService } from '../_services/auth.service';
import { BlogsService } from '../_services/blogs.service';

@Component({
  selector: 'app-post-blog',
  templateUrl: './post-blog.component.html',
  styleUrls: ['./post-blog.component.css']
})
export class PostBlogComponent implements OnInit {
  public error: string;
  errorMessage: any;
  constructor(private blogService: BlogsService, private router: Router) { }
  formGroup: FormGroup | any;
  ngOnInit(): void { }
  postblog() {
    console.log(this.formGroup.value)
    this.blogService.postblog(this.formGroup.value).subscribe();
  }

}
