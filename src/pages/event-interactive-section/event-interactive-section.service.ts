import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from '../../environment/environment';

@Injectable()
export class InteractiveSectionsService {

    constructor(
        private http: HttpClient,
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
