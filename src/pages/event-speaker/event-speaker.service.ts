import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from '../../environment/environment';

@Injectable()
export class SpeakerService {

    constructor(
        private http: HttpClient,
    ) {}

    getSpeakers(): Observable < Object > {
        return this.http
            .get(`${API.base}/speakers`);
    }

    getSpeakerById(id): Observable < Object > {
        return this.http
            .get(`${API.base}/speakers/${id}`);
    }

    addSpeaker(data) {
        return this.http
            .post(`${API.base}/speakers/`, data);
    }

    getSpeakersHardCode(): Observable < Object > {
        return this.http
            .get(`${API.dev}/speakers.json`);
    }
}
