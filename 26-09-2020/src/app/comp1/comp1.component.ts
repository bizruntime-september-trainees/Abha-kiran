import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';
@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private _designServices:DesignutilityService) {
    this._designServices.userName.subscribe(uname=>{
      this.userName=uname
    })
   }
  
  ngOnInit(): void {
  }
userName;
updateUserName(uname){
 // this.userName=uname.value
 this._designServices.userName.next(uname.value)
}
}
