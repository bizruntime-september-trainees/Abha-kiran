import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';  
import { SplashScreen } from '@ionic-native/splash-screen/ngx';  
import { StatusBar } from '@ionic-native/status-bar/ngx';  
@Component({
  selector: 'app-menus',
  templateUrl: './menus.page.html',
  styleUrls: ['./menus.page.scss'],
})
export class MenusPage implements OnInit {
  navigate: any;  
  constructor(  
    private platform: Platform,  
    private splashScreen: SplashScreen,  
    private statusBar: StatusBar  
  ) {  
    this.sideMenu();  
    this.initializeApp();  
  }  
  
  initializeApp() {  
    this.platform.ready().then(() => {  
      this.statusBar.styleDefault();  
      this.splashScreen.hide();  
    });  
  }  
  sideMenu() {  
    this.navigate =  
    [  
      {  
        title : 'Home',  
        url   : '/home',  
        icon  : 'home'  
      },  
      {  
        title : 'Chat',  
        url   : '/chat',  
        icon  : 'chatboxes'  
      },  
      {  
        title : 'Contacts',  
        url   : '/contacts',  
        icon  : 'contacts'  
      },  
    ];  
  }  
  

  ngOnInit() {
  }

}
