import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserServiceProvider} from '../providers/user-service/user-service';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    private me: User;
  
    ngOnInit() { }
  
    constructor( private userServiceProvider: UserServiceProvider) {
        this.userServiceProvider.getUser(3)
            .then(me => this.me = me);
    }  
}
