import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Blogs} from '../_models/blogs'
import { Users } from '../_models/users';

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
  postblog(blog: Blogs) {
    return this.http.post<Blogs[]>('http://localhost:8080/blogs/add', blog)
  }

  constructor(private http:HttpClient) { }
}
