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

  chartInfo = [
    { option: 'a', quantity: 88 },
    { option: 'b', quantity: 66 },
    { option: 'c', quantity: 77 },
    { option: 'd', quantity: 44 },
    { option: 'e', quantity: 11 },
    { option: 'f', quantity: 60 },
    { option: 'g', quantity: 23 },
    { option: 'h', quantity: 119 },
  ];
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

    this.randomColorInit = Math.floor(Math.random() * this.colors.length);
  }

  ionViewDidLoad() {
    this.putBlockHeight();
    this.getTotals();
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
    
    this.maxValue = new Array(this.divisorNumber * this.factor);
    
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
