import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  


  searchvalue:string
show(t){
  this.searchvalue=t.value.title
  console.log(t.value.title)
}
  constructor(public authServise: AuthService) { }
  logOut() {
    this.authServise.logout();
  }
  ngOnInit(): void {

  }

}
