import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EventModel } from '../../models/event.model';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';
import { CameraOptions, Camera } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-event-speaker-add',
  templateUrl: 'event-speaker-add.html',
})
export class EventSpeakerAddPage {

  public event: EventModel;
  public form: FormGroup;

  public myphoto: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera,
    private formBuilder: FormBuilder,
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
      detail: ['', Validators.required],
      resume: [''],
      image: [''],
    });
  }
  
  takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.myphoto = 'data:image/jpeg;base64,' + imageData;
      document.getElementById('selecionarFoto').innerHTML = '';
    }, (err) => {
      // Handle error
    });
  }

  uploadImageMobile() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false
    }

    this.camera.getPicture(options).then((imageData) => {
      this.myphoto = 'data:image/jpeg;base64,' + imageData;
      document.getElementById('selecionarFoto').innerHTML = '';
    }, (err) => {
      // Handle error
    });
  }

  readImg($event) {
    if (event.target && event.target['files'] && event.target['files'][0]) {
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        this.myphoto = (<FileReader>event.target).result;
        document.getElementById('selecionarFoto').innerHTML = '';
      }

      reader.readAsDataURL(event.target['files'][0]);
    }
  }

}
