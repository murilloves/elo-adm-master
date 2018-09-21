import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventViewQuestionPage } from './event-view-question';

@NgModule({
  declarations: [
    EventViewQuestionPage,
  ],
  imports: [
    IonicPageModule.forChild(EventViewQuestionPage),
  ],
})
export class EventViewQuestionPageModule {}
