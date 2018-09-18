import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from '../../environment/environment';
import { Platform } from 'ionic-angular';

@Injectable()
export class SpeakerService {

    constructor(
        private http: HttpClient,
        private _platform: Platform
    ) {}

    getSpeakers(): Observable < Object > {
        return this.http
            .get(`${API.baseDev}/speakers`);
    }

    getSpeakerById(id): Observable < Object > {
        return this.http
            .get(`${API.baseDev}/speakers/${id}`);
    }

    addSpeaker(data) {
        return this.http
            .post(`${API.baseDev}/speakers/`, data);
    }

    getSpeakersHardCode(): Observable < Object > {
        return this.http
            .get(`${API.dev}/speakers.json`);
    }
}
