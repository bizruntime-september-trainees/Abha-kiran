import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pushsplice',
  templateUrl: './pushsplice.component.html',
  styleUrls: ['./pushsplice.component.css']
})
export class PushspliceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  users=[];
  onCreateUser(uname){
    this.users.push({
      name:uname.value
    });
    
  }
  onRemoveUser(){
    this.users.splice(this.users.length-1);
  }
  onRemoveItem(item){
    this.users.splice(item,2);
  }

}
