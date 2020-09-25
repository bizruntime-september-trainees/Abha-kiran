import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style',
  templateUrl: './class-style.component.html',
  styleUrls: ['./class-style.component.css']
})
export class ClassStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
mypro:boolean=true;
myStyle1:string="15px";
isActive:boolean=false;
multiclass={
  class1:true,
  class2:false,
  class:true
}
mtlStyle={
  'background':'red',
  'border':'10px solid green'
}
}
