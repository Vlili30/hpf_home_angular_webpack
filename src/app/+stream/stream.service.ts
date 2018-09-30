import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'environments/environment';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StreamService {

    constructor(private http:HttpClient) {}

    // Uses http.get() to load data from a single API endpoint
    getStream() {
        return this.http.get(environment.apiUrl+'/stream');
    }
}
