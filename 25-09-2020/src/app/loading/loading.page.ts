import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular'; 
@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(public loadingCtrl: LoadingController) { }
  showLoading() {  
    this.loadingCtrl.create({  
      message: 'Loading...'  
      }).then((loading) => {  
       loading.present();  
    
       setTimeout(() => {  
         loading.dismiss();  
       }, 20000);  
      });  
    }  
  ngOnInit() {
  }

}
