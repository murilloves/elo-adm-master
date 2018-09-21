import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from '../../environment/environment';
import { Platform } from 'ionic-angular';

@Injectable()
export class InteractiveSectionsService {

    constructor(
        private http: HttpClient,
        private _platform: Platform
    ) {}

    getSections(): Observable < Object > {
        return this.http
            .get(`${API.base}/sections`);
    }

    getSectionById(id): Observable < Object > {
        return this.http
            .get(`${API.base}/sections/${id}`);
    }

    getRankingBySectionId(id): Observable < Object > {
        return this.http
            .get(`${API.base}/sections/${id}/ranking`);
    }

    addSection(data) {
        return this.http
            .post(`${API.base}/sections/`, data);
    }
}
