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

    public getJobs(settings: Object, range: number[]): Promise<Object[]> {
        console.log(range);
        return this.getRawData(settings)
            .then(response => response.json().jobs.map(
                job => {
                    job['timestamp'] = new Date(job['timestamp']).getTime();
                    job['values']['jobs'] = 1;
                    return job;
                }
            ) as Object[])
            .then(jobs => jobs
                .filter(
                    job => job['timestamp'] >= range[0] && job['timestamp'] <= range[1]
                ))
            .then(jobs => jobs
                .reduce((acc, job) => {
                    const key: string = job['properties'][settings['property']];
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
                            acc['r'] += values[settings['bubbleSize']];
                            return acc;
                        }, { 'x': 0, 'y': 0, 'r': 0, 'name': group['name'] })];
                    return group;
                })
            )
            .catch(this.handleError);
    }

    public getPeriodSettings(settings: Object) {
        return this.getRawData(settings)
            .then(response => {
                const object = response.json();
                const periodSettings = object.jobs.reduce((acc, job) => {
                    acc['min'] = (acc['min'] === undefined || job['timestamp'] < acc['min']) ? job['timestamp'] : acc['min'];
                    acc['max'] = (acc['max'] === undefined || job['timestamp'] > acc['max']) ? job['timestamp'] : acc['max'];
                    return acc;
                }, {});
                periodSettings['resolution'] = object.resolution_in_minutes * 60;
                return periodSettings;
            })
            .catch(this.handleError);
    }

    public getPartialJobs(settings: Object, fraction: number, timeFrameWidthAsFraction: number): Promise<Object[]> {
        return this.getJobs(settings, [0, 1])
            .then(jobs => jobs
                .reduce((acc, job) => {
                    acc['min'] = (acc['min'] === undefined || job['timestamp'] < acc['min']) ? job['timestamp'] : acc['min'];
                    acc['max'] = (acc['max'] === undefined || job['timestamp'] > acc['max']) ? job['timestamp'] : acc['max'];
                    acc['jobsInterval'] = acc['max'] - acc['min'];
                    acc['timeFrameWidth'] = acc['jobsInterval'] * timeFrameWidthAsFraction;
                    acc['frameStart'] = new Date(acc['min'].getTime() + fraction * acc['jobsInterval'] - acc['timeFrameWidth'] / 2);
                    acc['frameEnd'] = new Date(acc['frameStart'].getTime() + acc['timeFrameWidth']);
                    return acc;
                }, jobs) as Object[])
            .then(jobs => jobs
                .filter(job => job['timestamp'] >= jobs['frameStart'] && job['timestamp'] <= jobs['frameEnd'])
            );
    }
}
