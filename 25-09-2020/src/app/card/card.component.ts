import { Component, OnInit } from '@angular/core';

import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private _msgService:DesignutilityService) { }
  products={};

  ngOnInit(): void {
    this.products=this._msgService.product;
  }
  btnClick(){
    this._msgService.messageAlert();
  }
}
