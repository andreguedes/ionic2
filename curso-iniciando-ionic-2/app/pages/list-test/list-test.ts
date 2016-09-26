import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ListTestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/list-test/list-test.html',
})
export class ListTestPage {

  personagens: Array<string>;

  constructor(private navCtrl: NavController) {
    this.personagens = [
      'item 1',
      'item 2',
      'item 3'
    ];
  }

}
