import { Component } from '@angular/core';
import { EventModel } from '../../models/event.model';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EventViewQuestionPage } from '../event-view-question/event-view-question';
import { EventViewAnswersPage } from '../event-view-answers/event-view-answers';

import { QuestionsService } from '../event-register-questions/event-register-questions.service';

@IonicPage()
@Component({
  selector: 'page-event-results',
  templateUrl: 'event-results.html',
})
export class EventResultsPage {

  public event: EventModel;

  initialLoading = true;
  allQuestions;

  visible = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private questionsService: QuestionsService,
  ) {
    this.event = this.navParams.get('event');
  }
  
  ionViewDidLoad() {
    this.getAllQuestions();
  }

  getAllQuestions() {
    this.questionsService.getQuestions()
      .subscribe( response => {
          this.initialLoading = false;
          this.allQuestions = response;
      });
  }

  activateOrDeactivate(question) {
    this.questionsService.activateQuestion(question.id)
      .subscribe( response => {
        console.log(response);
      });
  }

  enterQuestion(question) {
    this.navCtrl.push(EventViewQuestionPage, { event: this.event, question: question });
  }

  seeCharts(question) {
    this.navCtrl.push(EventViewAnswersPage, { event: this.event, question: question });
  }
}
