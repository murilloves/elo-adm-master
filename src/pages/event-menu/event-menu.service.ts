import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from '../../environment/environment';

@Injectable()
export class EventsService {

    constructor(
        private http: HttpClient,
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
