import {CarbonFootprintArgs} from './carbonFootprintArgs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})

export class CarbonFootprintAccessor {
    apiPrefix = 'https://cors-anywhere.herokuapp.com/https://api.triptocarbon.xyz/v1/footprint?';

    constructor(public http: HttpClient) {

    }


    getCarbonFootprint(args: CarbonFootprintArgs) {
        // example: https://api.triptocarbon.xyz/v1/footprint?activity=10&activityType=miles&country=def&mode=taxi
        // https://api.triptocarbon.xyz/v1/footprint?activity=20&activityType=miles&country=def&mode=petrolCar
        const url = this.apiPrefix + 'activity=' + args.activity +
            '&activityType=' + args.activityType + '&country=' + args.country + '&mode=' + args.mode;

        // tslint:disable-next-line:max-line-length
        return this.http.get(url).toPromise().then(res => console.log(res));

//
        //return fetch(url.toString(),{
        //        mode: 'no-cors',
        //        headers: {
        //            "Content-Type": "application/json"
        //        },
        //    }
        //    ).then(res => res.json()).then(res => res as CarbonFootprintResponse);
    }
}


export class CarbonFootprintResponse {
    carbonFootprint: number;
}