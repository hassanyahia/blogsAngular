import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blogs } from '../_models/blogs'
@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  getAll(){
    return this.http.get<Blogs[]>('http://localhost:8080/getAll')
    }
    ResultFromSearch(title:string){
    return this.http.get<Blogs[]>('http://localhost:8080/blogs/search/'+title)
    } 
  getblog(id:number){
    return this.http.get<Blogs>('http://localhost:8080/blogs/'+id)
  }
  getuserblogs(id:number){
    return this.http.get<Blogs[]>('http://localhost:8080/blogs/userBlogs/'+id)
  }
  postblog(blog: Blogs) {
    return this.http.post<Blogs>('http://localhost:8080/blogs/add', blog)
  }
  edit(id: number, blog: Blogs) {
    return this.http.patch<Blogs>("http://localhost:8080/users/" + id, blog)
  }

  constructor(private http:HttpClient) { }
}
