import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MembersProvider } from '../../providers/members/members';
import { ShowFloorPage } from '../show-floor/show-floor';


@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  hits: Array<{ lgh: string, lmv: string, membername: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private membersProvider: MembersProvider) {
    this.hits = this.membersProvider.members;
  }

  getItems(ev: any) {
    this.hits = this.membersProvider.members;
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.hits = this.hits.filter((member) => {
        return (
          (member.membername.toLowerCase().indexOf(val.toLowerCase()) > -1)
          || (member.lgh.toLowerCase().indexOf(val.toLowerCase()) > -1)
          || (member.lmv.toLowerCase().indexOf(val.toLowerCase()) > -1)
        );
      })
    }
  }

  itemTapped(event, lgh) {
    var mask = lgh.substring(0, 2);
    this.navCtrl.push(ShowFloorPage, mask);
  }

  GoBack(event) {
    // Goto back to home page
    this.navCtrl.pop();
  }

}
