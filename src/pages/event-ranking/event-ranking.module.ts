import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventRankingPage } from './event-ranking';

@NgModule({
  declarations: [
    EventRankingPage,
  ],
  imports: [
    IonicPageModule.forChild(EventRankingPage),
  ],
})
export class EventRankingPageModule {}
