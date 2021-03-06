/*

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EventModel } from '../../models/event.model';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';

@IonicPage()
@Component({
  selector: 'page-template',
  templateUrl: 'template.html',
})
export class EVENTNAMEPAGE {

  public event: EventModel;
  public form: FormGroup;

  constructor(
    public navCtrl: NavController,
    private formBuilder: FormBuilder,
    public navParams: NavParams
  ) {
    this.event = this.navParams.get('event');

    this.setClearForm();
  }

  ionViewDidLoad() {
  }

  setClearForm() {
    this.form = this.formBuilder.group({
      eventId: [this.event.eventId],
      name: ['', Validators.required],
      detail: [''],
    });
  }

}

*/
