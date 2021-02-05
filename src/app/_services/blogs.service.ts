import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Blogs} from '../_models/blogs'

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  getAll(){
    return this.http.get<Blogs[]>('http://localhost:8080/getAll')
    } 
  getblog(id:number){
    return this.http.get<Blogs>('http://localhost:8080/blogs/'+id)
  }
  getuserblogs(){
    return this.http.get<Blogs[]>('http://localhost:8080/getAll')
  }

  constructor(private http:HttpClient) { }
}
