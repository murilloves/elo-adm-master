import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { EventModel } from '../../models/event.model';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';
import { AngularFirestore } from '../../../node_modules/angularfire2/firestore';

@Component({
  selector: 'page-event-info',
  templateUrl: 'event-info.html',
})
export class EventInfoPage {

  public event: EventModel;

  public form: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private alertCtrl: AlertController,
    public DB: AngularFirestore) {

    this.event = this.navParams.get('event');

    this.form = this.formBuilder.group({
      city: [this.event.city],
      date: [this.event.date, Validators.required],
      description: [this.event.description],
      image: [''],
      name: [this.event.name, Validators.required],
      place: [this.event.place],
      state: [this.event.state]
    });
  }

  save() {
    this.DB.doc<EventModel>('events/' + this.event.UID).update({
      city: this.form.controls['city'].value,
      date: this.form.controls['date'].value,
      description: this.form.controls['description'].value,
      image: this.form.controls['image'].value,
      name: this.form.controls['name'].value,
      place: this.form.controls['place'].value,
      state: this.form.controls['state'].value
    }).then(() => {
      let alert = this.alertCtrl.create({
        title: 'Tudo certo!',
        subTitle: 'As informações gerais da evento foram atualizadas com sucesso.',
        buttons: ['OK']
      });
      alert.present();
    }).catch(() => {
      let alert = this.alertCtrl.create({
        title: 'Erro!',
        subTitle: 'Erro ao atualizar informações gerais do evento.',
        buttons: ['OK']
      });
      alert.present();
    });
  }
}
