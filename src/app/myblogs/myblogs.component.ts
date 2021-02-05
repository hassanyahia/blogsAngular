import { Component, Input, OnInit, Output } from '@angular/core';
import {Blogs} from '../_models/blogs'
import {BlogsService} from '../_services/blogs.service'


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
  constructor(private blogservice:BlogsService) { }
  ngOnInit(): void {
   this.blogservice.getAll().subscribe(
     e=>{
       console.log(e)
       this.blogs=e;
       this.numBlogs.push(e)
     }

   )
  }

}
