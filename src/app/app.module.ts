import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Camera } from '@ionic-native/camera';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { Environment } from '../environment/environment';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { EventMenuPage } from '../pages/event-menu/event-menu';
import { EventInfoPage } from '../pages/event-info/event-info';
import { EventInteractiveSectionPage } from '../pages/event-interactive-section/event-interactive-section';
import { EventSchedulePage } from '../pages/event-schedule/event-schedule';
import { EventSpeakerPage } from '../pages/event-speaker/event-speaker';
import { EventSpeakerAddPage } from '../pages/event-speaker-add/event-speaker-add';
import { EventSponsorPage } from '../pages/event-sponsor/event-sponsor';
import { EventRegisterQuestionsPage } from '../pages/event-register-questions/event-register-questions';
import { EventResultsPage } from '../pages/event-results/event-results';
import { EventViewQuestionPage } from '../pages/event-view-question/event-view-question';
import { EventViewAnswersPage } from '../pages/event-view-answers/event-view-answers';
import { EventRankingPage } from '../pages/event-ranking/event-ranking';

import { EventsService } from '../pages/event-menu/event-menu.service';
import { SpeakerService } from '../pages/event-speaker/event-speaker.service';
import { QuestionsService } from '../pages/event-register-questions/event-register-questions.service';
import { InteractiveSectionsService } from '../pages/event-interactive-section/event-interactive-section.service';

// Import Froala Editor // and // Import Angular2 plugin.
import "froala-editor/js/froala_editor.pkgd.min.js";
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    EventMenuPage,
    EventInfoPage,
    EventInteractiveSectionPage,
    EventRankingPage,
    EventRegisterQuestionsPage,
    EventResultsPage,
    EventSchedulePage,
    EventSpeakerAddPage,
    EventSpeakerPage,
    EventSponsorPage,
    EventViewAnswersPage,
    EventViewQuestionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(Environment.firebase),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    AngularFirestoreModule.enablePersistence(),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    EventMenuPage,
    EventInfoPage,
    EventInteractiveSectionPage,
    EventRankingPage,
    EventRegisterQuestionsPage,
    EventResultsPage,
    EventSchedulePage,
    EventSpeakerAddPage,
    EventSpeakerPage,
    EventSponsorPage,
    EventViewAnswersPage,
    EventViewQuestionPage
  ],
  providers: [
    Camera,
    EventsService,
    InteractiveSectionsService,
    QuestionsService,
    SpeakerService,
    SplashScreen,
    StatusBar,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
