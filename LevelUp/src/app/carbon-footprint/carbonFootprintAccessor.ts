import {CarbonFootprintArgs} from "./carbonFootprintArgs";


export class CarbonFootprintAccessor {
    apiPrefix = 'https://api.triptocarbon.xyz/v1/footprint?';


    getCarbonFootprint(args: CarbonFootprintArgs): Promise<CarbonFootprintResponse>{
        // example: https://api.triptocarbon.xyz/v1/footprint?activity=10&activityType=miles&country=def&mode=taxi
        const url = new URL(this.apiPrefix + 'activity=' + args.activity +
            '&activityType=' + args.activityType + '&country=' + args.mode);
        return fetch(url.toString()).then(res => res.json()).then(res => res as CarbonFootprintResponse);
    }
}



export class CarbonFootprintResponse{
    carbonFootprint: number;
}
