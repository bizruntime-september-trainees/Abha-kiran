import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  uname:string="Two way";
  isCollapsed = false;
  mytime: Date = new Date();
}
