import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  headers : any =[
    { href :'/home', name:'Home'},
    { href :'/about', name:'About Us'},
    { href :'/contact', name:'Contact Us'}
  ]
  constructor() { }

  ngOnInit() {}

}
