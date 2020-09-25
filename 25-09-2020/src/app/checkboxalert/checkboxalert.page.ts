import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-checkboxalert',
  templateUrl: './checkboxalert.page.html',
  styleUrls: ['./checkboxalert.page.scss'],
})
export class CheckboxalertPage implements OnInit {

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }
  async showCheckBoxAlert() {  
    const alert = await this.alertCtrl.create({  
      header: 'What is your favorite Programming Language?',  
      inputs: [  
        {  
          name: 'checkbox 1',  
          type: 'checkbox',  
          label: 'Javascript',  
          value: 'Javascript',  
          checked: true,  
        },  
        {  
          name: 'checkbox 2',  
          type: 'checkbox',  
          label: 'Rxjs',  
          value: 'Rxjs',  
        },  
        {  
          name: 'checkbox 3',  
          type: 'checkbox',  
          label: 'Angular',  
          value: 'Angular',  
        },  
      ],  
      buttons: [  
        {  
          text: 'Cancel',  
          handler: data => {  
            console.log('Cancel clicked');  
          }  
        },  
        {  
          text: 'Save',  
          handler: data => {  
            console.log('Saved clicked');  
          }  
        }  
      ]  
    });  
    await alert.present();  
  }  
}
