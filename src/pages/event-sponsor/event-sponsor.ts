import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventModel } from '../../models/event.model';

@Component({
  selector: 'page-event-sponsor',
  templateUrl: 'event-sponsor.html',
})
export class EventSponsorPage {

  public event: EventModel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.event = this.navParams.get('event');
  }
}
