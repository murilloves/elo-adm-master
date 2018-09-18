import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventModel } from '../../models/event.model';
import { EventInfoPage } from '../event-info/event-info';
import { EventSponsorPage } from '../event-sponsor/event-sponsor';
import { EventSpeakerPage } from '../event-speaker/event-speaker';
import { EventSchedulePage } from '../event-schedule/event-schedule';
import { EventInteractiveSectionPage } from '../event-interactive-section/event-interactive-section';

@Component({
  selector: 'page-event-menu',
  templateUrl: 'event-menu.html',
})
export class EventMenuPage {

  public event: EventModel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.event = this.navParams.get('event');
  }

  info() {
    this.navCtrl.push(EventInfoPage, { event: this.event });
  }

  sponsors() {
    this.navCtrl.push(EventSponsorPage, { event: this.event });
  }

  speakers() {
    this.navCtrl.push(EventSpeakerPage, { event: this.event });
  }

  schedule() {
    this.navCtrl.push(EventSchedulePage, { event: this.event });
  }

  interactiveSection() {
    this.navCtrl.push(EventInteractiveSectionPage, { event: this.event });
  }
}