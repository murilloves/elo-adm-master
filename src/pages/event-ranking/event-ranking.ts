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
  public session: EventModel;

  initialLoading = true;
  listeners = null;
  allInterativeSections;

  visible = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private interactiveSectionsService: InteractiveSectionsService,
  ) {
    this.event = this.navParams.get('event');
  }

  ionViewDidLoad() {
    this.getAllListenersByRanking();
  }

  getAllListenersByRanking() {
    this.interactiveSectionsService.getRankingBySectionId(this.session)
      .subscribe( response => {
        this.listeners = response;
        this.initialLoading = false;
      });
  }

  getAllInterativeSections() {
    this.interactiveSectionsService.getSections()
      .subscribe( response => {
        this.allInterativeSections = response;
      });
  }

}
