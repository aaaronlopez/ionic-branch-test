import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavController } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { SharePage } from '../pages/share/share';

// Branch import
declare var Branch;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  @ViewChild('myNav') nav: NavController

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    platform.resume.subscribe(() => {
      branchInit();
    });

    // Branch initialization
    const branchInit = () => {
      // only on devices
      if (!platform.is('cordova')) { return }
      Branch.initSession(data => {
        // read deep link data on click
        if (data['page'] != null) {
          alert('Deep Link into page');
          if (data['page'] == 'about') {
            this.nav.push(AboutPage);
          } else if (data['page'] == 'share') {
            this.nav.push(SharePage);
          }
        } else {
          alert('Deep Link Data: ' + JSON.stringify(data));
        }
      });
    }
  }
}

