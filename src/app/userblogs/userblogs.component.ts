import { Component, OnInit } from '@angular/core';
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

  constructor(private blogService:BlogsService,public ar:ActivatedRoute,public r:Router) { }

  ngOnInit(): void {
    let id=0;
    this.ar.params.subscribe(
      a=>{id=a['id']
      this.blogService.getblog(id).subscribe(
        e=>{this.blog=e
        console.log(e)
        }
      )
    }
    )


  }

}
