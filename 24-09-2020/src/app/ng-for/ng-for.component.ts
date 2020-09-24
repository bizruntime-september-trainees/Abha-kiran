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
    {proimg:'https://cdn.pixabay.com/photo/2014/05/02/21/49/home-office-336373_960_720.jpg',name:'Laptop',id:'pro01',price:15000},
    {proimg:'https://i.insider.com/5dd80deffd9db20a176152d8?width=1100&format=jpeg&auto=webp',name:'Mobile',id:'pro02',price:9000},
    {proimg:'https://www.lg.com/sg/images/tvs/md05271244/gallery/LG-43LH600T-L.jpg',name:'Tv',id:'pro03',price:7000},
    {proimg:'https://www.nicepng.com/png/detail/117-1177113_pile-of-clothes-png-freeuse-library-laundry-washing.png',name:'Washing Machine',id:'pro04',price:5000}
  ]
}
