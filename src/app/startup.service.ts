import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { GlobalService } from 'app/global.service';

@Injectable()
export class StartupService {


    constructor(private http: Http) { }

    load(): Promise<any> {

        return new Promise((resolve: any) => {

            let jsonFileURL: string = "assets/appsettings.json";
            this.http.get(jsonFileURL)
                .map((res: Response) => res.json())
                .toPromise()
                .then((data: any) => {
                    return resolve(GlobalService.setEndPoints(data.ConfigSettings));
                })
                .catch((err: any) => {
                    Promise.reject(err);
                });
        });
    }



}
