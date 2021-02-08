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
  follow(user : Users){
    let i=0;
    for(i=0;i<user.follower.length;i++){
      console.log(user.follower[i])
      console.log(user._id)
      if(JSON.parse(localStorage.getItem('USER'))._id===user.follower[i]){
        alert("already followig")
        break;
      }
    }
    return this.http.post<Users>("http://localhost:8080/users/follow/"+user._id,{})
  }
  unfollow(user:Users){
    let i=0;
    for(i=0;i<user.follower.length;i++){
      console.log(user.follower[i])
      console.log(user._id)
      if(JSON.parse(localStorage.getItem('USER'))._id!==user.follower[i]){
        alert("mm")
      }
      else{
        return this.http.post<Users>("http://localhost:8080/users/unfollow/"+user._id,{})
      }
    }
   

  }

 
  constructor(private http:HttpClient) { }
}
