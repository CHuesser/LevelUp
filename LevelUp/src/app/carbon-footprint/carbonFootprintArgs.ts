// specs from https://www.notion.so/Trip-to-Carbon-API-REFERENCE-a68cfb4e0dcc41f9826cba1f3e4af5ac

export class CarbonFootprintArgs {
    activity: number;
    activityType: ActivityType;
    mode: string;
    country: Country;
}


export enum ActivityType {
    miles = 'miles',
    fuel = 'fuel'
}

export enum Mode {
    dieselCar = 'dieselCar',
    petrolCar = 'petrolCar',
    anyCar = 'anyCar',
    taxi = 'taxi',
    economyFlight = 'economyFlight',
    businessFlight = 'businessFlight',
    firstclassFlight = 'firstclassFlight',
    anyFlight = 'anyFlight',
    motorbike = 'motorbike',
    bus = 'bus',
    transitRail = 'transitRail'
}

export enum Country {
    usa = 'usa',
    gbr = 'gbr',
    def = 'def'
}
