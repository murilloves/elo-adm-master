import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventSpeakerAddPage } from './event-speaker-add';

@NgModule({
  declarations: [
    EventSpeakerAddPage,
  ],
  imports: [
    IonicPageModule.forChild(EventSpeakerAddPage),
  ],
})
export class EventSpeakerAddPageModule {}
