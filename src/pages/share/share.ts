
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SharePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 declare var Branch;

@IonicPage()
@Component({
  selector: 'page-share',
  templateUrl: 'share.html',
})
export class SharePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SharePage');
  }

  linkShare() {
    // only canonicalIdentifier is required
    var properties = {
      canonicalIdentifier: 'content/123',
      canonicalUrl: 'https://example.com/content/123',
      title: 'Content 123 Title',
      contentDescription: 'Content 123 Description ' + Date.now(),
      contentImageUrl: 'http://lorempixel.com/400/400/',
      price: 12.12,
      currency: 'GBD',
      contentIndexingMode: 'private',
      contentMetadata: {
        page: 'share'
      }
    }

    // create a branchUniversalObj variable to reference with other Branch methods
    var branchUniversalObj = null
    Branch.createBranchUniversalObject(properties).then(function (res) {
      branchUniversalObj = res

      // optional fields
      var analytics = {
        channel: 'facebook',
        feature: 'onboarding',
        campaign: 'content 123 launch',
        stage: 'new user',
        tags: ['one', 'two', 'three'],
      }

      var message = 'Check out this link'

      // optional listeners (must be called before showShareSheet)
      branchUniversalObj.onShareSheetLaunched(function (res) {
        // android only
        console.log(res)
      })
      branchUniversalObj.onShareSheetDismissed(function (res) {
        console.log(res)
      })
      branchUniversalObj.onLinkShareResponse(function (res) {
        console.log(res)
      })
      branchUniversalObj.onChannelSelected(function (res) {
        // android only
        console.log(res)
      })

      // share sheet
      branchUniversalObj.showShareSheet(analytics, properties, message)
    });
  }

}
