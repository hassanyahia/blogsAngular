import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
