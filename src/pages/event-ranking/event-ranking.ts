import { Component } from '@angular/core';
import { EventModel } from '../../models/event.model';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// import {} from '';

@IonicPage()
@Component({
  selector: 'page-event-ranking',
  templateUrl: 'event-ranking.html',
})
export class EventRankingPage {

  public event: EventModel;

  initialLoading = true;
  listeners;

  visible = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.event = this.navParams.get('event');
  }

  ionViewDidLoad() {
    this.getAllListenersByRanking();
  }

  getAllListenersByRanking() {

  }

}
