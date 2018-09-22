import { Component } from '@angular/core';
import { EventModel } from '../../models/event.model';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { InteractiveSectionsService } from '../event-interactive-section/event-interactive-section.service';

@IonicPage()
@Component({
  selector: 'page-event-ranking',
  templateUrl: 'event-ranking.html',
})
export class EventRankingPage {

  public event: EventModel;
  public questions: EventModel;
  public session: EventModel;

  initialLoading = true;
  allListeners = null;
  listeners = null;

  showing = 0;

  numberOfQuestions;

  visible = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private interactiveSectionsService: InteractiveSectionsService,
  ) {
    this.event = this.navParams.get('event');
    this.numberOfQuestions = this.navParams.get('questions').length;
  }

  ionViewDidLoad() {
    this.hideFooter(true);
    this.getAllListenersByRanking();
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

  getAllListenersByRanking() {
    this.interactiveSectionsService.getRankingBySectionId(this.session)
      .subscribe( response => {
        this.allListeners = response;
        this.getNextTen();
        this.initialLoading = false;
      });
  }

  getNextTen() {
    this.showing += 10;
    this.listeners = [];
    this.allListeners.forEach((element, index) => {
      if (index < this.showing) {
        this.listeners.push(element);
      }
    });
  }

  isShowingAll() {
    return this.allListeners && this.showing >= this.allListeners.length;
  }
  
}
