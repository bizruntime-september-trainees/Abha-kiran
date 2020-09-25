import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbind',
  templateUrl: './eventbind.component.html',
  styleUrls: ['./eventbind.component.css']
})
export class EventbindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //msg:string="";
  //onAddCart(event){
   // this.msg=event.target.value+"Product added in card";
  //}
  
  //onInputClick(event){
    //console.log(event.target.value);
  //}
  getInputInfo(my){
    console.log(my.name);
  }
}
