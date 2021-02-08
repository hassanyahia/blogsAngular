import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
   closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  searchvalue:string
show(t){
  this.searchvalue=t.value.title
  console.log(t.value.title)
}
  constructor() { }

  ngOnInit(): void {

  }

}
