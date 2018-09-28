import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { EventModel } from '../../models/event.model';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';

import { Camera, CameraOptions } from '@ionic-native/camera';

import { SpeakerService } from './event-speaker.service';
import { EventSpeakerAddPage } from '../event-speaker-add/event-speaker-add';

@Component({
  selector: 'page-event-speaker',
  templateUrl: 'event-speaker.html',
})
export class EventSpeakerPage {

  public event: EventModel;
  public newSpeaker: EventModel;

  public form: FormGroup;

  myphoto: any;
  allSpeakers = [
    { name: 'John Connor', detail: '-' },
    { name: 'Sarah Connor', detail: '-' },
    { name: 'Arnold Schwarzenegger', detail: '-' },
    { name: 'Linda Hamilton', detail: '-' },
    { name: 'Edward Furlong', detail: '-' },
  ];
  message = '';
  showErrorMsg = false;

  loading;

  isDesktop = (!document.URL.startsWith('http') || document.URL.startsWith('http://localhost:8100'));

  constructor(
    private camera: Camera,
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private speakerService: SpeakerService,
    private loadingController: LoadingController
  ) {
    this.loading = this.loadingController.create({
      content: 'Carregando palestrantes...'
    })
    this.event = this.navParams.get('event');
    
    this.setClearFormAndImg();
  }
  
  ionViewDidLoad() {
    // this.presentLoading();
    this.getAllSpeakers();
  }

  getAllSpeakers() {
    this.speakerService.getSpeakers()
      .subscribe( speakers => {
        this.allSpeakers = <any>speakers;
        this.dismissLoading();
      }, error => {
        this.dismissLoading();
        this.errorMessage(error);
      });
  }

  // getAllSpeakersHardCode() {
  //   this.speakerService.getSpeakersHardCode()
  //     .subscribe( speakers => {
  //       this.allSpeakers = speakers;
  //       this.dismissLoading();
  //     }, error => {
  //       this.dismissLoading();
  //       this.errorMessage(error);
  //     });
  // }

  errorMessage(error) {
    this.showErrorMsg = true;
    this.message = 'Ocorreu um erro, tente novamente...';
    console.error(error);
  }

  presentLoading() {
    this.loading.present();
  }

  dismissLoading() {
    this.loading.dismiss();
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

  goToAddPage() {
    this.navCtrl.push( EventSpeakerAddPage, { event: this.event });
  }
}
