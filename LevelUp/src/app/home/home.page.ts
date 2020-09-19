import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserServiceProvider} from '../providers/user-service/user-service';
import {BearState} from '../models/BearState';
import {BearStateServiceProvider} from '../providers/bearState-service/bearState-service';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    private me: User;
    bearStates: BearState[];
    happyBear: BearState;
    sportyBear: BearState;
    chubbyBear: BearState;
    tiredBear: BearState;
    sustBear: BearState;
    antiSustBear: BearState;

    ngOnInit() { }

    constructor( private userServiceProvider: UserServiceProvider, private bearTypeServiceProvider: BearStateServiceProvider) {
        this.userServiceProvider.getUser(3)
            .then(me => this.me = me);
        this.bearTypeServiceProvider.getBearStates().then((bearStates => {
            this.bearStates = bearStates;
            this.happyBear = bearStates[0];
            this.tiredBear = bearStates[1];
            this.chubbyBear = bearStates[2];
            this.sportyBear = bearStates[3];
            this.sustBear = bearStates[4];
            this.antiSustBear = bearStates[5];
        }));
    }
}
