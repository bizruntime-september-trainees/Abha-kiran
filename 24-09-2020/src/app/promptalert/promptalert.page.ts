import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-promptalert',
  templateUrl: './promptalert.page.html',
  styleUrls: ['./promptalert.page.scss'],
})
export class PromptalertPage implements OnInit {

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }
  async showPrompt() {  
    const prompt = await this.alertCtrl.create({  
      header: 'Album',  
      message: 'Enter a name for this new album',  
      inputs: [  
        {  
          name: 'name1',  
          type: 'text',  
          placeholder: 'Placeholder 1'  
        },  
        {  
          name: 'name2',  
          type: 'text',  
          placeholder: 'Placeholder 2'  
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
    await prompt.present();  
  }  
}
