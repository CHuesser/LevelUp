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
    private friends: User[];
  
    ngOnInit() { }
  
    constructor( private userServiceProvider: UserServiceProvider) {
        this.userServiceProvider.getUser(0)
            .then(me => this.me = me)
            .then(_ => this.userServiceProvider.getFriends(this.me)
                .then(users => this.friends = users));
    }  
}
