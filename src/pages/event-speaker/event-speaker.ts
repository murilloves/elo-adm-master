import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventModel } from '../../models/event.model';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';

import { Camera, CameraOptions } from '@ionic-native/camera';

import { SpeakerService } from './event-speaker.service';

@Component({
  selector: 'page-event-speaker',
  templateUrl: 'event-speaker.html',
})
export class EventSpeakerPage {

  public event: EventModel;
  public newSpeaker: EventModel;

  public form: FormGroup;

  myphoto: any;
  allSpeakers;
  initialLoading = true;
  isDesktop = (!document.URL.startsWith('http') || document.URL.startsWith('http://localhost:8100'));

  constructor(
    private camera: Camera,
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private speakerService: SpeakerService
  ) {
    this.event = this.navParams.get('event');

    this.setClearFormAndImg();
  }

  ionViewDidLoad() {
    // console.log('event', this.event);
    this.froalaInit();
    this.getAllSpeakers();
  }

  froalaInit() { 
    // $('div#froala-editor').froalaEditor({
    //   // Add the custom buttons in the toolbarButtons list, after the separator.
    //   toolbarButtons: ['undo', 'redo' , 'bold', 'underline', '|', 'alert', 'clear', 'insert']
    // })
  }

  getAllSpeakers() {
    this.speakerService.getSpeakers()
      .subscribe( speakers => {
        this.allSpeakers = speakers;
        this.initialLoading = false;
        // console.log(this.allSpeakers);
      });
  }

  getAllSpeakersHardCode() {
    this.speakerService.getSpeakersHardCode()
      .subscribe( speakers => {
        this.allSpeakers = speakers;
        this.initialLoading = false;
        // console.log(this.allSpeakers);
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
    }, (err) => {
      // Handle error
    });
  }

  readImg($event) {
    if (event.target && event.target['files'] && event.target['files'][0]) {
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        this.myphoto = (<FileReader>event.target).result;
      }
  
      reader.readAsDataURL(event.target['files'][0]);
    }
  }

  setClearFormAndImg() {
    this.form = this.formBuilder.group({
      // eventId: [this.event.UID],
      eventId: [this.event.eventId],
      name: ['', Validators.required],
      detail: ['', Validators.required],
      resume: [''],
      image: [''],
    });
    this.myphoto = null;
  }

  uploadImageBrowser() {
    console.log('here ai em');
  }

  save() {
    this.form.controls.image.setValue(this.myphoto);
    // console.log('Data', this.form);

    this.speakerService.addSpeaker(this.form.value)
      .subscribe(response => {
        this.getAllSpeakers();
        this.setClearFormAndImg();
        console.log('deu certo');
      }, error => {
        this.setClearFormAndImg();
        console.error('deu ruim', error);
      }
    );
  }
}
