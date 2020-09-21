import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products=[
    {proimg:'',name:'Laptop',id:'pro01',price:15000},
    {proimg:'',name:'Mobile',id:'pro02',price:9000},
    {proimg:'',name:'Tv',id:'pro03',price:7000},
    {proimg:'',name:'Washing Machine',id:'pro04',price:5000}
  ]
}
