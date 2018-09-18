import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFirestoreCollection, AngularFirestore } from '../../../node_modules/angularfire2/firestore';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { EventModel } from '../../models/event.model';
import { EventMenuPage } from '../event-menu/event-menu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private eventsCollection: AngularFirestoreCollection<EventModel>;
  events: Observable<EventModel[]>;

  constructor(public navCtrl: NavController, public DB: AngularFirestore) {

    this.eventsCollection = DB.collection<EventModel>('events');
    this.events = this.eventsCollection.valueChanges();
  }

  goToEvent(event: EventModel) {
    this.navCtrl.push(EventMenuPage, { event: event });
  }
}
