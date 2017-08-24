import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class JobsService {

    constructor(private http: Http) { }

    private getRawData(settings: Object): Promise<Response> {
        return this.http.get('assets/' + settings['period'] + '_dummy_data.json').toPromise();
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }

    public getJobs(settings: Object): Promise<Object[]> {
        return this.getRawData(settings)
            .then(response => response.json().jobs.map(
                job => {
                    job['timestamp'] = new Date(job['timestamp']);
                    return job;
                }
            ) as Object[])
            .then(jobs => jobs
                .reduce((acc, job) => {
                    const key: string = job['classes'][settings['dataClass']];
                    acc[key] = acc[key] || { name: key, series: [] };
                    acc[key]['series'].push(job);
                    return acc;
                }, []) as Object[])
            .then(groups => Object.keys(groups)
                .map(key => groups[key]))
            .then(groups => groups
                .map(group => {
                    group['series'] = [group['series']
                        .reduce((acc, job) => {
                            const values = job['values']
                            acc['x'] += values[settings['xAxis']];
                            acc['y'] += values[settings['yAxis']];
                            acc['field'] += values[settings['bubbleSize']];
                            return acc;
                        }, { 'x': 0, 'y': 0, 'field': 0, 'name': group['name'] })];
                    return group;
                })
                .map(group => {
                    group['series'][0]['r'] = Math.sqrt(group['series'][0]['field']);
                    return group;
                })
            )
            .catch(this.handleError);
    }

    public getPeriodResolutionInSeconds(settings: Object) {
        return this.getRawData(settings)
            .then(response => response.json().resolution_in_minutes * 60)
            .catch(this.handleError);
    }
}
