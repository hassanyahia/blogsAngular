import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Blogs} from '../_models/blogs'
import { Users } from '../_models/users';
import {BlogsService} from '../_services/blogs.service'
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-get-allblogs',
  templateUrl: './get-allblogs.component.html',
  styleUrls: ['./get-allblogs.component.css']
})
export class GetAllblogsComponent implements OnInit {
  likeFlag:number[]=[];
  i;
  likes:number[]=[]
  blogs:Blogs[]=[]
  suggesions:Users[]=[]
  comment:string;
   blogdate=new Date
   newdate=new Date
  constructor(private userservicve:UsersService, private blogservice:BlogsService,public ar:ActivatedRoute,public r:Router) { }
  ngOnInit(): void {
   this.blogservice.getAll().subscribe(
     e=>{
      this.i=0;
      this.likeFlag[this.i]=0 
       this.blogs=e;
       this.blogs.sort((a,b)=> 0 - (a > b ? 1 : -1))
       for(let i=0;i<this.blogs.length;i++){
         this.blogs[i].createdAt=this.blogdate
         this.blogs[i].createdAt
       if( this.blogs[i].likes.includes(JSON.parse(localStorage.getItem('USER'))._id)){
         this.likeFlag[this.i]=1
        console.log(this.blogs[i])
      }
      else{
        this.likeFlag[i]=0

      }   
    }
    
     }
   )
   this.userservicve.getAllusers().subscribe(
     e=>{this.suggesions=e
    console.log(e) 
    }
   )
  }
 like(id){
   this.blogservice.like(id).subscribe(
     e=>{
       console.log(e)
       this.likeFlag[id]=1
     }
   )
 }
 unlike(id){
  this.blogservice.unlike(id).subscribe(
    e=>{
      console.log(e)
      this.likeFlag[id]=0
    }
  )
}

  
}
