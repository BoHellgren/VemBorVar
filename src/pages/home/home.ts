import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Http } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';

import { MembersProvider } from '../../providers/members/members';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  stairs: string[] = ['6 trappor ', '5 trappor ', '4 trappor ', '3 trappor ', '2 trappor ', '1 trappa '];

  constructor(public navCtrl: NavController, private membersProvider: MembersProvider) {
  }

  ionViewDidLoad(): void {
    this.membersProvider.loadMembers();
  }

  GotoShowFloor(event, trappHus, row) {

    var mask: string;
    var streetAddr: string;
    var floorNum: number;

    floorNum = +row.substr(0, 1);
    floorNum++;
    mask = trappHus + floorNum.toString();
    this.navCtrl.push('ShowFloorPage', mask);
  }

  GotoSearchPage() {
    this.navCtrl.push('SearchPage');
  }

}
