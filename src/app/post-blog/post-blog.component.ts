import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogsService } from '../_services/blogs.service';
import { Blogs } from '../_models/blogs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-blog',
  templateUrl: './post-blog.component.html',
  styleUrls: ['./post-blog.component.css']
})
export class PostBlogComponent implements OnInit {
  imageUrl:string="/assets/img/upload-image.png";
  blog: Blogs = new Blogs('','', '' , '','', new Date());
  formData = new FormData();
  addForm: FormGroup;
  constructor(private blogService: BlogsService, private router: Router,private fb:FormBuilder) {
    this.addForm = this.fb.group({
      title: [''],
      body: [''],
      blogImg: [''],
      tags: []
    });
   }
 // formGroup: FormGroup | any;
  ngOnInit(): void { }
 
 AddOne() {
  this.formData.append('title',this.addForm.get('title').value);
  this.formData.append('body',this.addForm.get('body').value);
   this.formData.append('blogImg', this.addForm.get('blogImg').value);
   this.formData.append('tags', this.addForm.get('tags').value)
    this.blogService.postblog(this.formData).subscribe(
      a => {
        console.log(a);
       this.router.navigateByUrl('home');
      },
      err => {
        console.log(err);
      })
    }
  imgInput(files: any) {
    this.addForm.get('blogImg').setValue(files.item(0));
    // console.log(this.addForm.get('blogImg'), "1")
    // this.imageUrl = this.addForm.get('blogImg').value.name
    // console.log(this.imageUrl, "2")
    } 
}

