import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MembersProvider } from '../../providers/members/members';

@Component({
  selector: 'page-show-floor',
  templateUrl: 'show-floor.html',
})
export class ShowFloorPage {

  liveHere: Array<{ lgh: string, lmv: string, membername: string }>;
  streetAddr: string; // E.g. Taxgatan 3
  houseNumber: string; // 1 for Taxgatan 7, 2 for Taxgatan 3
  floorNum: number; // E.g. 6 or 1
  floorName: string; //E.g. 6 trappor or 1 trappa


  constructor(public navCtrl: NavController, public navParams: NavParams, private membersProvider: MembersProvider) {
    var mask = navParams.data; // First two digits of lgh-number
    console.log('attr ', mask.attr);
    if (mask.substring === undefined) return;
    this.houseNumber = mask.substring(0, 1);
    if (this.houseNumber == '1') { this.streetAddr = 'Taxgatan 7' } else { this.streetAddr = 'Taxgatan 3' };
    this.floorNum = +(mask.substring(1, 2)) - 1;
    if (this.floorNum == 1) { this.floorName = this.floorNum.toString().concat(' trappa') }
    else { this.floorName = this.floorNum.toString().concat(' trappor') };
    this.getItems(mask);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowFloorPage');
  }

  GoBack(event) {
    // Goto back to home page
    this.navCtrl.pop();
  }

  GoUp(event) {
    // Goto next higher floor
    if (this.floorNum < 6 || this.floorNum < 7 && this.streetAddr === 'Taxgatan 3') {
      this.floorNum++;
      this.floorName = this.floorNum.toString().concat(' trappor');
      var mask = this.houseNumber.concat((this.floorNum + 1).toString());
      this.getItems(mask);
    }
  }

  GoDown(event) {
    // Goto next lower floor
    if (this.floorNum > 1) {
      this.floorNum--;
      if (this.floorNum == 1) { this.floorName = this.floorNum.toString().concat(' trappa') }
      else { this.floorName = this.floorNum.toString().concat(' trappor') };
      var mask = this.houseNumber.concat((this.floorNum + 1).toString());
      this.getItems(mask);

    }
  }

  getItems(mask) {
    console.log('mask: ', mask);
    // this.members = this.navParams.data;
    this.liveHere = this.membersProvider.members.filter((member) => {
      return (member.lgh.substring(0, 2).indexOf(mask) > -1);
    })
  }

}
