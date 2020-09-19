import {Component, OnInit} from '@angular/core';
import {Challenge} from '../models/Challenge';

import {ChallengeServiceProvider} from '../providers/challenge-service/challenge-service';
import {ActivityType, CarbonFootprintArgs, Country, FuelType, Mode} from "../carbon-footprint/carbonFootprintArgs";
import {CarbonFootprintAccessor} from "../carbon-footprint/carbonFootprintAccessor";

@Component({
    selector: 'app-challenges',
    templateUrl: './challenges.page.html',
    styleUrls: ['./challenges.page.scss'],
})
export class ChallengesPage implements OnInit {
    private filteredChallenges: Challenge[];
    private challenges: Challenge[];
    private filterargs: number[];
    private buttonColors: string[];

    ngOnInit() {
    }

    constructor(private challengeServiceProvider: ChallengeServiceProvider) {
        this.challengeServiceProvider.getChallenges().then((challenges => {
            this.challenges = challenges;
            this.filteredChallenges = challenges;
        }));
        this.filterargs = [0, 1, 2, 3];
        this.buttonColors = ['danger', 'success', 'warning', 'tertiary'];
    }

    removeAddFilter(filter: number) {
        const index = this.filterargs.indexOf(filter);

        if (index !== -1) {
            this.filterargs.splice(index, 1);
            // document.getElementById('filter_' + filter).setAttribute('color', 'medium');
            document.getElementById('filter_' + filter).classList.add('deactivated-filter');
        } else {
            this.filterargs.push(filter);
            // document.getElementById('filter_' + filter).removeAttribute('color');
            // document.getElementById('filter_' + filter).setAttribute('color', this.buttonColors[filter]);
            document.getElementById('filter_' + filter).classList.remove('deactivated-filter');
        }
        this.filteredChallenges = this.challenges.filter(item => this.filterargs.indexOf(item.category) !== -1);


    }


    calculateSavedCarbonFootprint(){
        let args = new CarbonFootprintArgs();
        args.activityType = ActivityType.miles;
        args.activity = 20;
        args.country = Country.def;
        args.fuelType = FuelType.motorGasoline;
        args.mode = Mode.petrolCar;

        let carbonFootprintAccessor = new CarbonFootprintAccessor();
        let response = carbonFootprintAccessor.getCarbonFootprint(args);
        console.log(response);
    }


}
