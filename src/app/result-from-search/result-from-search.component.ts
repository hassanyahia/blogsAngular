import { Component, OnInit } from '@angular/core';
import {Blogs} from '../_models/blogs'
import {BlogsService} from '../_services/blogs.service'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-result-from-search',
  templateUrl: './result-from-search.component.html',
  styleUrls: ['./result-from-search.component.css']
})
export class ResultFromSearchComponent implements OnInit {

  blogs:Blogs[]=[]
  date=new Date().getTime()
  blogdate=new Date()
  newdate=new Date
  mille=this.newdate.getTime()
  differ=this.date-this.mille
 constructor(private blogservice:BlogsService,public ar:ActivatedRoute,public r:Router) { }
 ngOnInit(): void {
   let title=""
   this.ar.params.subscribe(
     a=>{title=a['title']
    this.blogservice.ResultFromSearch(title).subscribe(
      e=>{this.blogs=e
      console.log(e)
      }
    )
    }
   )
 }


}
