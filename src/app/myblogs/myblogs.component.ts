import { Component, Input, OnInit, Output } from '@angular/core';
import {Blogs} from '../_models/blogs'
import {BlogsService} from '../_services/blogs.service'
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-myblogs',
  templateUrl: './myblogs.component.html',
  styleUrls: ['./myblogs.component.css']
})
export class MyblogsComponent implements OnInit {
  
  blogs:Blogs[]=[]
  numBlogs=[]
   x=this.numBlogs.length;

  date=Date.now().toLocaleString()
  constructor(private blogservice:BlogsService,public ar:ActivatedRoute,public r:Router) { }

 
  ngOnInit(): void {
    let id=0;
    this.ar.params.subscribe(
      a=>{id=a['id']
      console.log(a)
    this.blogservice.getuserblogs(id).subscribe(
      e=>{
        this.blogs=e;

      
      }
    )
    }
    )
   
  }

}
