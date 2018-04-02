import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

import { SearchPage } from '../search/search';
import { ShowFloorPage } from '../show-floor/show-floor';
import { MembersProvider } from '../../providers/members/members';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  stairs: string[] = ['6 trappor ', '5 trappor ', '4 trappor ', '3 trappor ', '2 trappor ', '1 trappa '];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, afDatabase: AngularFireDatabase, private membersProvider: MembersProvider) {
    console.log('HomePage constructor started');
    var swRegistration = null;
    const subs = afDatabase.list('/subs');
    const traces = afDatabase.list('/traces');
    //
    // Start the service worker 
    //


    if ('serviceWorker' in navigator) {
      console.log('Service Worker is supported');
      console.log('navigator[userAgent]: ', navigator["userAgent"]);
      navigator.serviceWorker.register('service-worker.js')
        .then(function (swReg) {
          swRegistration = swReg;
          console.log('Service Worker is registered', swRegistration);

          handleSubscribe();
        })
        .catch(function (error) {
          console.error('Service Worker Error', error);
        });
    }

    // Function handleSubscribe  

    function handleSubscribe() {

      console.log('handleSubscribe called');

      if ('Notification' in window) {

        var notperm = window["Notification"].permission
        console.log('Notification.permisson: ', notperm);

        if (notperm === 'denied') return;

        // Do we already have a push message subscription?

        swRegistration.pushManager.getSubscription()
          .then(function (subscription) {

            if (!subscription) {
              // We aren’t subscribed to push, so set UI
              // to allow the user to enable push
              let alert = alertCtrl.create({
                title: 'Godkänn avisering',
                message: 'Vill du bli informerad när någon ny medlem i vår brf flyttat in?' +
                  ' Svara i så fall Tillåt (Allow) på frågan som kommer när du trycker på OK.',
                buttons: [
                  {
                    text: 'OK',
                    handler: () => { console.log('OK clicked'); subscribeMe(); }
                  }
                ]
              });

              alert.present();
            } // end of if no subscription
          })
          .catch(function (err) {
            console.log('Error during getSubscription()', err);
          });
      };
    } // end of function handleSubscribe

    // Function subscribeMe

    function subscribeMe() {

      console.log('subscribeMe startad');

      swRegistration.pushManager.subscribe({ userVisibleOnly: true })

        .then(function (subscription) {
          console.log('User is subscribed. Subscription:', subscription);
          var mysub = JSON.stringify(subscription);

          // Update the subscription database 
          var subtime = Date();
          subs.push({ subscription: mysub, timesubmitted: subtime });
          console.log('Subscription pushed: ', mysub);

        })

        .catch(function (err) {
          var newperm = window["Notification"].permission;
          if (newperm === 'denied') {
            console.warn('Permission for notifications was denied by user');
          } else {
            console.error('Failed to subscribe the user: ', err);
          }
        });
    } // end of function subscribeMe

    //
    // Service worker started. Other house-keeping:
    //

    this.membersProvider.loadMembers(); // Load members from web site

    // Update the database to trace usage of app

    var tracetime = Date();
    var tracemsg = navigator["userAgent"];
    traces.push({ userAgent: tracemsg, timesubmitted: tracetime});
    console.log('Trace msg pushed: ', tracemsg);

  } // end of constructor


  GotoShowFloor(event, trappHus, row) {

    var mask: string;
    var floorNum: number;

    floorNum = +row.substr(0, 1);
    floorNum++;
    mask = trappHus + floorNum.toString();
    this.navCtrl.push(ShowFloorPage, mask);
  }

  GotoSearchPage() {
    this.navCtrl.push(SearchPage);
  }

}
