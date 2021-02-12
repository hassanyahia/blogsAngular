import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../_services/auth.service';
import { BlogsService } from '../_services/blogs.service';
import { Blogs } from '../_models/blogs';
import { stringify } from '@angular/compiler/src/util';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-blog',
  templateUrl: './post-blog.component.html',
  styleUrls: ['./post-blog.component.css']
})
export class PostBlogComponent implements OnInit {
  imageUrl:string="/assets/img/upload-image.png";
  blog: Blogs = new Blogs('','', '' , '','', new Date());
  formData=new FormData();
  filetoUpload:File;
  addForm: FormGroup;
  file:FileList;
  
  
   
  constructor(private blogService: BlogsService, private router: Router,private fb:FormBuilder) {
    this.addForm = this.fb.group({
      title: [''],
      body: [''],
      blogImg:['']
    });
   }
 // formGroup: FormGroup | any;
  ngOnInit(): void { }
 
 AddOne() {
  this.formData.append('title',this.addForm.get('title').value);
  this.formData.append('body',this.addForm.get('body').value);
  this.formData.append('blogImg',this.addForm.get('blogImg').value)

    this.blogService.postblog(this.formData).subscribe(
      a => {
        console.log(a);
       this.router.navigateByUrl('home');
      },
      err => {
        console.log(err);
      })
    }
    imgInput(files:any){
      this.addForm.get('blogImg').setValue(files.item(0));
    } 
}

