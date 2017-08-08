import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class JobsService {
    constructor(private http: Http) { }

    public getJobs(): Promise<Object[]> {
        return this.http.get('assets/dummy_data.json')
            .toPromise()
            .then(response => response.json() as Object[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }
}
