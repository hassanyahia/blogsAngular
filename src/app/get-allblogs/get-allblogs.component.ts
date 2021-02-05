import { Component, OnInit } from '@angular/core';
import {Blogs} from '../_models/blogs'
import {BlogsService} from '../_services/blogs.service'

@Component({
  selector: 'app-get-allblogs',
  templateUrl: './get-allblogs.component.html',
  styleUrls: ['./get-allblogs.component.css']
})
export class GetAllblogsComponent implements OnInit {
  blogs:Blogs[]=[]
   date=new Date().getTime()
   blogdate=new Date()
   newdate=new Date
   mille=this.newdate.getTime()
   differ=this.date-this.mille
  constructor(private blogservice:BlogsService) { }
  ngOnInit(): void {
   this.blogservice.getAll().subscribe(
     e=>{
       this.blogs=e
        this.blogdate=this.blogs[1].createdAt
     }

   )
  }

}
