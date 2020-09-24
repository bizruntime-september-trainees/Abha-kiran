import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
@Component({
  selector: 'app-basicalert',
  templateUrl: './basicalert.page.html',
  styleUrls: ['./basicalert.page.scss'],
})
export class BasicalertPage implements OnInit {

  constructor(public alertCtrl: AlertController) { }
  async showAlert() {  
    const alert = await this.alertCtrl.create({  
      header: 'Alert',  
      subHeader: 'SubTitle',  
      message: 'This is an alert message',  
      buttons: ['OK']  
    });  
    await alert.present();  
    const result = await alert.onDidDismiss();  
    console.log(result);  
  }  
  ngOnInit() {
  }

}
