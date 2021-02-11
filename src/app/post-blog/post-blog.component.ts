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
  imageUrl:string="/assets/img/upload-image.png"
   blog: Blogs = new Blogs('','', '' , '','', new Date());
  formData=new FormData();
   filetoUpload:File;
   addForm: FormGroup;
   file:FileList;
  
  
   
  constructor(private blogService: BlogsService, private router: Router,private fb:FormBuilder) {
    this.addForm = this.fb.group({
      title: [''],
      body: [''],
    });
   }
 // formGroup: FormGroup | any;
  ngOnInit(): void { }
 
  handleFileInput(event) {
 /*this.filetoUpload=<any>event;
   console.log(event);
  //show image preview
  console.log(this.filetoUpload,this.formData);

  this.formData.append('blogImg', this.filetoUpload,this.filetoUpload.name);
   
 var reader = new FileReader();
  reader.onload =(event:any)=>{
     this.imageUrl=event.target.restult;
   }
   reader.readAsDataURL(this.filetoUpload);*/
  
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      console.log(file);
      reader.readAsDataURL(file);
    
      reader.onload = () => {
      
        this.imageUrl = reader.result as string;
        
        this.addForm.patchValue({
          fileSource: reader.result
        });
   
      };
   
    }
  }
   
   
  
  
 
 AddOne() {
  console.log(this.addForm.value);
  this.blogService.postblog( this.addForm.value)
    .subscribe(res => {
      console.log(res);
    })

  /*this.formData.append('title',this.blog.title);
    this.formData.append('body',this.blog.body);

    this.blogService.postblog(this.formData).subscribe(
      a => {
        console.log(a);
       this.router.navigateByUrl('home');
       
      },
      err => {
        console.log(err);
      })
 */
    }
  
}

