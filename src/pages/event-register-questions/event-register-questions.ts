import { Component } from '@angular/core';
import { EventModel } from '../../models/event.model';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';

import { SpeakerService } from '../event-speaker/event-speaker.service';
import { QuestionsService } from '../event-register-questions/event-register-questions.service';

@IonicPage()
@Component({
  selector: 'page-event-register-questions',
  templateUrl: 'event-register-questions.html',
})
export class EventRegisterQuestionsPage {

  public event: EventModel;
  public form: FormGroup;

  speaker;
  speakerId;
  session;
  newQuestion;
  initialLoading = true;
  allQuestions = null;
  optionLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  optionStructure = {
    questionId: '',
    letter: '',
    description: '',
    correct: false
  }
  optionsArray = [];
  correctOptionNumber = 0;

  validationMessage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private questionsService: QuestionsService
  ) {
    this.event = this.navParams.get('event');
    this.session = this.navParams.get('session');

    this.setClearForm();
    this.getAllQuestions();
  }

  setClearForm() {
    this.form = this.formBuilder.group({
      eventId: [this.event.eventId],
      sectionId: [this.session.id],
      speakerId: [this.session.speakerId],
      title: ['', Validators.required],
      subtitle: ['', Validators.required],
      description: [''],
      sequence: ['', Validators.required],
    });

    this.optionsArray = [];
    this.addOption();
  }

  getQuestionById(questionId) {
    this.questionsService.getQuestionById(questionId)
      .subscribe( response => {
        console.log(response);
      });
    }

  getAllQuestions() {
    this.questionsService.getQuestions()
      .subscribe( response => {
          this.initialLoading = false;
          this.allQuestions = response;
      });
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad EventRegisterQuestionsPage');
  }

  addOption() {
    const opt = {
      questionId: '',
      letter: this.optionLetters[this.optionsArray.length],
      description: '',
      correct: false
    };
    this.optionsArray.push(opt);
  }

  updateCorrect(letter) {
    this.correctOptionNumber = this.optionLetters.indexOf(letter);
    this.optionsArray.forEach( option => option.correct = false );
    this.optionsArray[this.correctOptionNumber].correct = true;
  }

  removeOption() {
    this.optionsArray.pop();
  }

  save() {

    if ( !this.bindOptionsDesc() ) {
      alert('Preencha todas as alternativas');
      return;
    }

    if ( !this.hasMarkedCorrectAnswer() ) {
      alert('Marque a opção correta');
      return;
    }

    let data = this.form.value;
    data.options = this.optionsArray;

    // console.log(this.form.value);

    this.questionsService.addQuestion(data)
      .subscribe(response => {
        this.getAllQuestions();
        this.setClearForm();
      }, error => {
        // this.setClearForm();
      }
    );
  }

  bindOptionsDesc() {
    let validDescriptions = true;
    const buffer = document.getElementsByClassName('question-option-description');
    Array.from(buffer).forEach((element, index) => {
      this.optionsArray[index].description = element.querySelectorAll('input')[0].value;
      if (this.optionsArray[index].description.length < 1) {
        validDescriptions = false;
        // this.validationMessage = 'Preencha todas as alternativas';
      }
    });

    console.log(this.optionsArray);
    return validDescriptions;
  }

  hasMarkedCorrectAnswer() {
    let haveCorrectAnswer = false;
    this.optionsArray.forEach(element => {
      if (element.correct) {
        haveCorrectAnswer = true;
        // this.validationMessage = 'Marque a opção correta';
      }
    });

    return haveCorrectAnswer;
  }

  goToQuestionsSection(questionId) {
    this.getQuestionById(questionId);
  }

}
