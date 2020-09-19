import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { UserServiceProvider} from '../providers/user-service/user-service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.page.html',
  styleUrls: ['./userlist.page.scss'],
})
export class UserlistPage implements OnInit {
  private me: User;
  private nonFriends: User[];

  constructor(private activatedRoute: ActivatedRoute, private userServiceProvider: UserServiceProvider) { }

  ngOnInit() {
    let meid = +this.activatedRoute.snapshot.paramMap.get('meid');
    this.userServiceProvider.getAllUsers().then(users => {
      this.userServiceProvider.getUser(meid).then(me => {
        this.me = me;
        this.nonFriends = users.filter(u => u.id !== this.me.id).filter(u => !this.me.friendIds.includes(u.id))
      })
    });
  }

  addFriend(friendId: number) {
    this.me.friendIds.push(friendId);
    this.disableButton = true;
  }
}
