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

  initialLoading = true;

  // chartInfo = [
  //   { letter: 'a', quantity: 88 },
  //   { letter: 'b', quantity: 66 },
  //   { letter: 'c', quantity: 77 },
  //   { letter: 'd', quantity: 44 },
  //   { letter: 'e', quantity: 11 },
  //   { letter: 'f', quantity: 60 },
  //   { letter: 'g', quantity: 23 },
  //   { letter: 'h', quantity: 119 },
  // ];
  chartInfo;
  chartMatrix = [];
  totalAnswers;
  maxValue = [];
  numberOfLines = ['','','',''];

  colors = ['#ff8a80', '#ff80ab', '#ea80fc', '#8c9eff', '#69f0ae', '#b2ff59', '#eeff41', '#ffd740', '#ffab40']
  randomColorInit;

  magicNumber = 56;
  divisorNumber;
  factor = 5;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private questionsService: QuestionsService
  ) {
    this.event = this.navParams.get('event');
    this.question = this.navParams.get('question');

    console.log(this.question);

    this.randomColorInit = Math.floor(Math.random() * this.colors.length);
  }

  ionViewDidLoad() {
    this.hideFooter(true);
    this.getQuestionGraphInfo();
  }

  ionViewDidLeave() {
    this.hideFooter(false);
  }

  hideFooter(flag) {
    if (flag) {
      document.getElementsByClassName('show-tabbar')[0]['style'].display = 'none';
    } else {
      document.getElementsByClassName('show-tabbar')[0]['style'].display = 'flex';
    }
  }

  getQuestionGraphInfo() {
    this.questionsService.getGraphQuestions(this.question['id'])
      .subscribe( response => {
        this.chartInfo = response;
        this.putBlockHeight();
        this.getTotals();
        this.initialLoading = false;
      });
  }

  putBlockHeight() {
    let vh = this.magicNumber / this.getMax();
    setTimeout(() => {
      const elements = document.getElementsByClassName('block-size');
      Array.from(elements).forEach((element, index) => {
        element['style'].height = vh + 'vh';
      });
    }, 0);
  }

  getMax() {
    let buffer = 0;
    this.chartInfo.forEach( item => {
      this.putMatrixColumns(item);
      if (item.quantity > buffer) {
        buffer = item.quantity;
      }
    });
    this.divisorNumber = Math.ceil(buffer / this.factor);

    if (buffer >= 5) {
      this.maxValue = new Array(this.divisorNumber * this.factor);
    } else {
      this.maxValue = new Array(buffer);
    }

    return buffer;
  }

  getTotals() {
    this.totalAnswers = this.chartInfo.reduce( (a, b) => a + b.quantity, 0);
  }

  getTableChartDisplay(maxValue, index) {
    return ((maxValue - index) % (this.divisorNumber)) !== 0;
  }

  putMatrixColumns(item) {
    this.chartMatrix.push(new Array(item.quantity));
  }

}
