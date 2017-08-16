import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {AboutPage} from '../about/about';
import {SharePage} from '../share/share';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  aboutPage = AboutPage;
  sharePage = SharePage;

  constructor(public navCtrl: NavController) {

  }

}
