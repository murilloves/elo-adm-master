import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventModel } from '../../models/event.model';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';

import { EventRegisterQuestionsPage } from '../event-register-questions/event-register-questions';

import { SpeakerService } from '../event-speaker/event-speaker.service';
import { InteractiveSectionsService } from './event-interactive-section.service';

@Component({
  selector: 'page-event-interactive-section',
  templateUrl: 'event-interactive-section.html',
})
export class EventInteractiveSectionPage {

  public event: EventModel;
  public form: FormGroup;

  allSpeakers = null;
  allInterativeSections = null;
  initialLoading = true;
  newSession;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private speakerService: SpeakerService,
    private interactiveSectionsService: InteractiveSectionsService
  ) {
    this.event = this.navParams.get('event');

    this.setClearForm();
    this.getAllSpeakers();
    this.getAllInterativeSections();
  }

  setClearForm() {
    this.form = this.formBuilder.group({
      eventId: [this.event.eventId],
      speakerId: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  getAllInterativeSections() {
    this.interactiveSectionsService.getSections()
      .subscribe( response => {
        this.allInterativeSections = response;
        this.initialLoading = false;
      });
  }

  getAllSpeakers() {
    this.speakerService.getSpeakers()
      .subscribe( response => {
        this.allSpeakers = response;
      });
  }

  save() {
    // console.log(this.form);

    this.interactiveSectionsService.addSection(this.form.value)
      .subscribe(response => {
        this.getAllInterativeSections();
        this.setClearForm();
      }, error => {
        // this.setClearForm();
      }
    );
  }

  goToQuestionsSection(chosenSession) {
    this.navCtrl.push(EventRegisterQuestionsPage, { event: this.event, session: chosenSession });
  }
}
