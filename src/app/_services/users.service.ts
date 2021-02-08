import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Users} from '../_models/users'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  getProfile(id:number){
    return this.http.get<Users>('http://localhost:8080/users/'+id)
  }
  getFollwers(id:number){
    return this.http.get<Users[]>('http://localhost:8080/users/followers/'+id)
  }
  getFollwing(id:number){
    return this.http.get<Users[]>('http://localhost:8080/users/following/'+id)
  }
  register(user: Users) {
    return this.http.post<Users>("http://localhost:8080/users/add", user);
  }
  follow(id:number){
    return this.http.post<Users>("http://localhost:8080/users/follow/"+id,{})
  }
 
  constructor(private http:HttpClient) { }
}
