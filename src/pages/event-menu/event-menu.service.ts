import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from '../../environment/environment';
import { Platform } from 'ionic-angular';

@Injectable()
export class EventsService {

    constructor(
        private http: HttpClient,
        private _platform: Platform
    ) {}

    getEvents(): Observable < Object > {
        return this.http
            .get(`${API.base}/events`);
    }

    getEventById(id): Observable < Object > {
        return this.http
            .get(`${API.base}/events/${id}`);
    }

    addEvent(data) {
        return this.http
            .post(`${API.base}/events/`, data);
    }
}
