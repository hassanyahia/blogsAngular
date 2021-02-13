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
  likeFlag;
  likes:number[]=[]
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
       for(let i=0;i<this.blogs.length;i++){
       if( this.blogs[i].likes.includes(JSON.parse(localStorage.getItem('USER'))._id)){

      }
      else{
        this.likeFlag=0
      }   
    }
     }
   )
  }
 like(id){
   this.blogservice.like(id).subscribe(
     e=>{
       console.log(e)
       this.likeFlag=1
     }
   )
 }
 unlike(id){
  this.blogservice.unlike(id).subscribe(
    e=>{
      console.log(e)
      this.likeFlag=0
    }
  )
}

  
}
