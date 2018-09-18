import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventModel } from '../../models/event.model';

@Component({
  selector: 'page-event-schedule',
  templateUrl: 'event-schedule.html',
})
export class EventSchedulePage {

  public event: EventModel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.event = this.navParams.get('event');
  }
}
