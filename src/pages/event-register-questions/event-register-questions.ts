import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventModel } from '../../models/event.model';

import { SpeakerService } from '../event-speaker/event-speaker.service';
import { QuestionsService } from '../event-register-questions/event-register-questions.service';

@IonicPage()
@Component({
  selector: 'page-event-register-questions',
  templateUrl: 'event-register-questions.html',
})
export class EventRegisterQuestionsPage {

  public event: EventModel;

  speaker;
  speakerId;
  session;
  initialLoading = true;
  allQuestions = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    // private speakerService: SpeakerService,
    private questionsService: QuestionsService
  ) {
    this.event = this.navParams.get('event');
    this.session = this.navParams.get('session');
    console.log('this.session', this.session);
    // this.getSpeakerById();
    this.getAllQuestionsBySpeaker();
  }

  // getSpeakerById() {
  //   this.speakerService.getSpeakerById(this.speakerId)
  //     .subscribe( response => {
  //       this.speaker = response;
  //       console.log(this.speaker);
  //     });
  //   }
  
  getAllQuestionsBySpeaker() {
    this.questionsService.getQuestionById(this.speakerId)
      .subscribe( response => {
          this.initialLoading = false;
          this.allQuestions = response;
          console.log('this.allQuestions', this.allQuestions);
        // }
        // , error {
          // Ocorreu um erro ao buscar as perguntas deste palestrante. Tentar novamente?
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventRegisterQuestionsPage');
  }

}
