import { Component } from '@angular/core';
import { EventModel } from '../../models/event.model';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { QuestionsService } from '../event-register-questions/event-register-questions.service';

@IonicPage()
@Component({
  selector: 'page-event-view-answers',
  templateUrl: 'event-view-answers.html',
})
export class EventViewAnswersPage {

  public event: EventModel;
  public question: EventModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private questionsService: QuestionsService
  ) {
    this.event = this.navParams.get('event');
    this.question = this.navParams.get('question');
    // console.log(this.question);
  }

  ionViewDidLoad() {

  }

}
