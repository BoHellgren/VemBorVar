import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MembersProvider } from '../../providers/members/members';

@IonicPage({
  defaultHistory: ['HomePage']
})
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  hits: Array<{ lgh: string, lmv: string, membername: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private membersProvider: MembersProvider) {
    this.hits = this.membersProvider.members;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  getItems(ev: any) {

    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.hits = this.hits.filter((member) => {
        return (member.membername.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  itemTapped(event, lgh) {
    var mask = lgh.substring(0, 2);
    this.navCtrl.push('ShowFloorPage', mask);
  }

  GoBack(event) {
    // Goto back to home page
    this.navCtrl.pop();
  }

}
