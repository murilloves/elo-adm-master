import { Component } from '@angular/core';
import { EventModel } from '../../models/event.model';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ChartsModule } from 'ng2-charts';

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
    { option: 'a', quantity: 8 },
    { option: 'b', quantity: 6 },
    { option: 'c', quantity: 7 },
    { option: 'd', quantity: 4 },
    { option: 'e', quantity: 1 },
    { option: 'f', quantity: 6 },
    { option: 'd', quantity: 4 },
    { option: 'e', quantity: 1 },
    { option: 'f', quantity: 6 },
    { option: 'g', quantity: 2 },
    { option: 'h', quantity: 11 },
  ];
  chartMatrix = [];
  totalAnswers;
  maxValue = [];
  numberOfLines = ['','','',''];

  colors = ['#ff8a80', '#ff80ab', '#ea80fc', '#8c9eff', '#69f0ae', '#b2ff59', '#eeff41', '#ffd740', '#ffab40']
  randomColorInit;

  magicNumber = 56;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private questionsService: QuestionsService
  ) {
    this.event = this.navParams.get('event');
    this.question = this.navParams.get('question');
    // console.log(this.question);
    this.randomColorInit = Math.floor(Math.random() * this.colors.length);
  }

  ionViewDidLoad() {
    // this.getMax();
    this.putBlockHeight();
    this.getTotals();
    // this.getPercentages();
  }

  putBlockHeight() {
    let vh = this.magicNumber / this.getMax();
    setTimeout(() => {
      const elements = document.getElementsByClassName('block-size');
      Array.from(elements).forEach((element, index) => {
        element.style.height = vh + 'vh';
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
    this.maxValue = new Array(buffer);
    return buffer;
  }

  getTotals() {
    this.totalAnswers = this.chartInfo.reduce( (a, b) => a + b.quantity, 0);
  }

  // getPercentages() {

  // }

  putMatrixColumns(item) {
    this.chartMatrix.push(new Array(item.quantity));
  }

}
