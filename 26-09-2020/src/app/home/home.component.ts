import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  statusOnline:boolean=true;
  products=[
    {name:'Laptop'},
    {name:'tv'},
    {name:'mobile'},
    {name:'Washing machine'}
  ]
}
