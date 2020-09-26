import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pushsplice',
  templateUrl: './pushsplice.component.html',
  styleUrls: ['./pushsplice.component.css']
})
export class PushspliceComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  users=[];
  onCreateUser(uname){
    this.users.push({
      name:uname.value
    });
    if(this.users.length>3){
      //alert("More than 3");
      this.router.navigate(['products']);
    }

  }
  onRemoveUser(){
    this.users.splice(this.users.length-1);
  }
  onRemoveItem(item){
    this.users.splice(item,2);
  }

}
