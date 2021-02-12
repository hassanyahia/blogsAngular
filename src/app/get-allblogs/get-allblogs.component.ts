import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Blogs} from '../_models/blogs'
import {BlogsService} from '../_services/blogs.service'

@Component({
  selector: 'app-get-allblogs',
  templateUrl: './get-allblogs.component.html',
  styleUrls: ['./get-allblogs.component.css']
})
export class GetAllblogsComponent implements OnInit {
  blogs:Blogs[]=[]
  comment:string;
   date=new Date().getTime()
   blogdate=new Date()
   newdate=new Date
   mille=this.newdate.getTime()
   differ=this.date-this.mille
  constructor(private blogservice:BlogsService,public ar:ActivatedRoute,public r:Router) { }
  ngOnInit(): void {
   this.blogservice.getAll().subscribe(
     e=>{
       this.blogs=e
        this.blogdate=this.blogs[1].createdAt
     }

   )
  }

  
}
