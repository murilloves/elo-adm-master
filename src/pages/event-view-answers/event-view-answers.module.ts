import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventViewAnswersPage } from './event-view-answers';

@NgModule({
  declarations: [
    EventViewAnswersPage,
  ],
  imports: [
    IonicPageModule.forChild(EventViewAnswersPage),
  ],
})
export class EventViewAnswersPageModule {}
