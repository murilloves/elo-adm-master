import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventModel } from '../../models/event.model';
import { EventInfoPage } from '../event-info/event-info';
import { EventSponsorPage } from '../event-sponsor/event-sponsor';
import { EventSpeakerPage } from '../event-speaker/event-speaker';
import { EventSchedulePage } from '../event-schedule/event-schedule';
import { EventInteractiveSectionPage } from '../event-interactive-section/event-interactive-section';
import { EventResultsPage } from '../event-results/event-results';
import { EventsService } from './event-menu.service';

@Component({
  selector: 'page-event-menu',
  templateUrl: 'event-menu.html',
})
export class EventMenuPage {

  public event: EventModel;
  allEvents;
  chosenEvent;
  initialLoading = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private eventsService: EventsService
  ) {
    this.event = this.navParams.get('event');
    this.getEvents();
  }

  getEvents() {
    this.eventsService.getEvents()
      .subscribe( response => {
        this.allEvents = response;
        this.initialLoading = false;
        // console.log('this.event', this.event);
        // console.log('this.allEvents', this.allEvents);
        this.chosenEvent = this.allEvents.filter( evt => {
          return !this.event.name.indexOf(evt.name);
        });
        this.chosenEvent = this.chosenEvent[0];
        this.event.eventId = this.chosenEvent.id;
      }
    );
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

  results() {
    this.navCtrl.push(EventResultsPage, { event: this.event });
  }
}
