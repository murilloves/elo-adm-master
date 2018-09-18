import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventRegisterQuestionsPage } from './event-register-questions';

@NgModule({
  declarations: [
    EventRegisterQuestionsPage,
  ],
  imports: [
    IonicPageModule.forChild(EventRegisterQuestionsPage),
  ],
})
export class EventRegisterQuestionsPageModule {}
