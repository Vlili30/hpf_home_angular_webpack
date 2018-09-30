import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'environments/environment';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PublicationPollService {

    constructor(private http:HttpClient) {}

    savePollVote(body) {
        return this.http.post(environment.apiUrl+'/poll/vote/', body, httpOptions);
    }
}
