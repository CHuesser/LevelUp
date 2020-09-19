import { Component, OnInit } from '@angular/core';
import {ActivityType, CarbonFootprintArgs, Country} from "../carbon-footprint/carbonFootprintArgs";
import {CarbonFootprintAccessor, CarbonFootprintResponse} from "../carbon-footprint/carbonFootprintAccessor";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home-tracksustainability',
  templateUrl: './home-tracksustainability.page.html',
  styleUrls: ['./home-tracksustainability.page.scss'],
})
export class HomeTracksustainabilityPage implements OnInit {
  takenTransport: string;
  notTakenTransport: string;
  traveledKm: number;
  savedCo2: number;
  resultHidden = true;

  constructor(public http: HttpClient ) {
    this.savedCo2 = 0;
  }

  ngOnInit() {
  }

  calculateSavedCo2()  {
    let usedCo2 = 0;
    let notUsedCo2 = 0;
    let carbonFootprintAccessor = new CarbonFootprintAccessor(this.http);

    let argsUsed = new CarbonFootprintArgs();
    argsUsed.mode = this.takenTransport;
    argsUsed.country = Country.def;
    argsUsed.activity = this.traveledKm * 0.621371;
    argsUsed.activityType = ActivityType.miles;

    let argsNotUsed = new CarbonFootprintArgs();
    argsNotUsed.mode = this.notTakenTransport;
    argsNotUsed.country = Country.def;
    argsNotUsed.activity = this.traveledKm * 0.621371;
    argsNotUsed.activityType = ActivityType.miles;

    carbonFootprintAccessor.getCarbonFootprint(argsNotUsed).then(r => notUsedCo2 = r.carbonFootprint).then(t => {
      carbonFootprintAccessor.getCarbonFootprint(argsUsed).then(r2 => usedCo2 = r2.carbonFootprint).then(i => this.savedCo2 = Math.round((notUsedCo2 - usedCo2) * 100) / 100).then( label =>
      this.resultHidden = false);
    });


  }
}



