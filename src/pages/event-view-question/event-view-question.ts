import { Component } from '@angular/core';
import { EventModel } from '../../models/event.model';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { QuestionsService } from '../event-register-questions/event-register-questions.service';

@IonicPage()
@Component({
  selector: 'page-event-view-question',
  templateUrl: 'event-view-question.html',
})
export class EventViewQuestionPage {

  public event: EventModel;
  public question: EventModel;

  showCorrectAnswer = false;
  pageName = 'page-event-view-question';

  fontSize = 24;

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
    document.getElementsByClassName('show-tabbar')[0]['style'].display = 'none';
  }

  increaseFontSize(inc) {
    inc ? this.fontSize++ : this.fontSize--;
    document.getElementsByTagName(this.pageName)[0]['style'].fontSize = this.fontSize + 'px';
  }

}
