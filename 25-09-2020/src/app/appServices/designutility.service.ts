import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService {

  constructor() { }
  messageAlert(){
    alert("Thanks for subscribe.")
  }
  product=[{name:"Laptop",id:"001"},
          {name:"Mobile",id:"002"},
          {name:"Tv",id:"003"},
          {name:"Washing Machine",id:"004"},

]
}
