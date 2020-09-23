import { Component, OnInit } from '@angular/core';
import {ActionSheetController } from '@ionic/angular'; 
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor( public actionsheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }
  async openMenu() {  
    const actionSheet = await this.actionsheetCtrl.create({  
      header: 'Modify your album',  
      buttons: [  
        {  
          text: 'Destructive',  
          role: 'destructive',  
          handler: () => {  
            console.log('Destructive clicked');  
          }  
        },{  
          text: 'Archive',  
          handler: () => {  
            console.log('Archive clicked');  
          }  
        }, {  
          text: 'Cancel',  
          role: 'cancel',  
          handler: () => {  
            console.log('Cancel clicked');  
          }  
        }  
      ]  
    });  
    await actionSheet.present();  
  }  
}  


