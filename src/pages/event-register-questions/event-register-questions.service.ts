import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from '../../environment/environment';

@Injectable()
export class QuestionsService {

    constructor(
        private http: HttpClient,
    ) {}

    getQuestions(): Observable < Object > {
        return this.http
            .get(`${API.base}/questions`);
    }

    getQuestionById(id): Observable < Object > {
        return this.http
            .get(`${API.base}/questions/${id}`);
    }

    getQuestionsBySessionId(sessionId): Observable < Object > {
        return this.http
            .get(`${API.base}/questions/${sessionId}`);
    }

    getGraphQuestions(questionId): Observable < Object > {
        return this.http
            .get(`${API.base}/questions/${questionId}/graph`);
    }

    addQuestion(data) {
        return this.http
            .post(`${API.base}/questions/`, data);
    }

    activateQuestion(data): Observable < Object > {
        return this.http
            .post(`${API.base}/questions/${data.id}/activate`, data);
    }

    getQuestionsHardCode(): Observable < Object > {
        return this.http
            .get(`${API.dev}/questions.json`);
    }
}
