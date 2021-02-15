import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blogs } from '../_models/blogs';
import { AuthService } from '../_services/auth.service';
import { BlogsService } from '../_services/blogs.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  loggedin=null;
  blog: Blogs;
  constructor(public authServise:AuthService, private blogService:BlogsService,public ar:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.loggedin=JSON.parse(localStorage.getItem('USER'));
    console.log(this.loggedin); 
    let id = 0;
    this.ar.params.subscribe(
      a => {
        id = a['id']
        this.blogService.getblog(id).subscribe(
          a => {
            this.blog = a
            console.log(this.blog._id)
          })
      })
  }
  }


