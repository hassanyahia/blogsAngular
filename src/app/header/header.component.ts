import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blogs } from '../_models/blogs';
import { AuthService } from '../_services/auth.service';
import { BlogsService } from '../_services/blogs.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  loggedin=null;
   value=0;
  blog: Blogs;
  profileimg: string;
  searchvalue:string
show(t){
  this.searchvalue=t.value.title
  console.log(t.value.title)
}
  constructor(public authServise: AuthService, private blogService: BlogsService, public ar: ActivatedRoute, public router: Router) { }
  logOut() {
    this.authServise.logout();

  }
  ngOnInit(): void {
    this.loggedin = JSON.parse(localStorage.getItem('USER'));
    if (this.loggedin.userImg) {
      this.profileimg = 'http://localhost:8080/' + this.loggedin.userImg
    } else {
      this.profileimg = "/assets/img/user-image.jpg"
    }
    console.log(this.loggedin); 
    let id = 0;
    this.ar.params.subscribe(
      a => {
        id = a['id']
        this.blogService.getblog(id).subscribe(
          a => {
            this.blog = a
            console.log(this.blog._id)
          })
      })
  }
  delete() {
    let id = 0;
    this.ar.params.subscribe(
      e => {
        id = e['id']
        this.blogService.delete(id).subscribe(
          a => {
            this.router.navigateByUrl('home');
            console.log(a)
          }
        )
      })
  }

}
