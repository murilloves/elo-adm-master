import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventModel } from '../../models/event.model';

import { SpeakerService } from '../event-speaker/event-speaker.service';

import { EventRegisterQuestionsPage } from '../event-register-questions/event-register-questions';

@Component({
  selector: 'page-event-interactive-section',
  templateUrl: 'event-interactive-section.html',
})
export class EventInteractiveSectionPage {

  public event: EventModel;

  allSpeakers;
  initialLoading = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private speakerService: SpeakerService
  ) {
    this.event = this.navParams.get('event');
    this.getAllSpeakers();
  }

  getAllSpeakers() {
    this.speakerService.getSpeakers()
      .subscribe( speakers => {
        this.allSpeakers = speakers;
        this.initialLoading = false;
        // console.log(this.allSpeakers);
      });
  }

  goToQuestionsSection(speaker) {
    // this.event['speakerId'] = speakerId;
    this.navCtrl.push(EventRegisterQuestionsPage, { event: this.event, speaker: speaker });
  }
}
