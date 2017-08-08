import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class JobsService {

    constructor(private http: Http) { }

    private getRawJobs(): Promise<Object[]> {
        return this.http.get('assets/dummy_data.json')
            .toPromise()
            .then(response => response.json().map(
                job => {
                    job['timestamp'] = new Date(job['timestamp']);
                    return job;
                }
            ) as Object[])
            .catch(this.handleError);
    }

    public getJobsByProject(): Promise<Object[]> {
        return this.getRawJobs()
            .then(jobs => jobs
                .reduce((acc, job) => {
                    const key: string = job['project']['name'];
                    acc[key] = acc[key] || {name: key, series: []};
                    acc[key]['series'].push(job);
                    return acc;
                }, []) as Object[])
            .then(groups => Object.keys(groups)
                .map(key => groups[key]))
            .then(groups => groups
                .map(group => {
                    group['series'] = [group['series']
                    .reduce((acc, job) => {
                        acc['x'] += job['memory'];
                        acc['y'] += job['nodes'];
                        acc['r'] += 1;
                        return acc;
                    }, {'x': 0, 'y': 0, 'r': 0, 'name': group['name']})];
                    return group;
                }));
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }
}
