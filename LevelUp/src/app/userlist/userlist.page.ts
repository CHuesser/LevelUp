import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.page.html',
  styleUrls: ['./userlist.page.scss'],
})
export class UserlistPage implements OnInit {
  private me: User;
  private nonFriends: User[];

  constructor(private activatedRoute: ActivatedRoute, private userServiceProvider: UserServiceProvider, public modalController: ModalController) { }

  ngOnInit() {
    let meid = +this.activatedRoute.snapshot.paramMap.get('meid');
    this.userServiceProvider.getUser(meid).then(me => {
      this.me = me;
      this.updateUsers();
    });
  }

  updateUsers() {
    this.userServiceProvider.getAllUsers().then(users => {
      this.nonFriends = users.filter(u => u.id !== this.me.id).filter(u => !this.me.friendIds.includes(u.id))
    })
  }

  closeUserlist() {
    this.modalController.dismiss();
  }

  addFriend(friendId: number) {
    this.me.friendIds.push(friendId);
    this.updateUsers();
  }
}
