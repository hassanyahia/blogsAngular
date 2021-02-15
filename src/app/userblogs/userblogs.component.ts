import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Blogs } from '../_models/blogs';
import { BlogsService } from '../_services/blogs.service';

@Component({
  selector: 'app-userblogs',
  templateUrl: './userblogs.component.html',
  styleUrls: ['./userblogs.component.css']
})
export class UserblogsComponent implements OnInit {
  blog:Blogs
  comment:string
  flag: number;
  constructor(private blogService:BlogsService,public ar:ActivatedRoute,public r:Router) { }
  formGroup: FormGroup | any;

  ngOnInit(): void {
    this.formGroup=new FormGroup({
      body:new FormControl
    })
    let id=0;
    this.ar.params.subscribe(
      a=>{id=a['id']
        console.log(a)
      this.blogService.getblog(id).subscribe(
        e => {
          if (e.Author == JSON.parse(localStorage.getItem('USER')).username) {
            this.flag = 1;
          } else {
            this.flag = 0;
          }
          this.blog = e;

        console.log(e)
        })
      })


  }
  postComment(){

    let id=0;
    this.ar.params.subscribe(
      a=>{id=a['id']
      console.log(a)
    this.blogService.postComment(id,this.formGroup.value.body).subscribe(
      e=>{
        console.log(e)        
        console.log(this.comment)
      }
    )
    }
    )

  }

  delete() {
    let id = 0;
    this.ar.params.subscribe(
      e => {
        id = e['id']
        this.blogService.delete(id).subscribe(
          a => {
            this.r.navigateByUrl('home');
            console.log(a)
          }
        )
      })
  }

}
