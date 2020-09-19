import {Component, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {User} from '../models/user';
import {Group} from '../models/group';

@Component({
    selector: 'app-modal-page',
    templateUrl: './modal-page.page.html',
    styleUrls: ['./modal-page.page.scss'],
})
export class ModalPagePage implements OnInit {
    private friends: User[];

    private groups: Group[];

    constructor(public modalController: ModalController, public navParams: NavParams) {
    }

    ngOnInit() {
        this.friends = this.navParams.get('friends');
        this.groups = this.navParams.get('groups');
    }

    closeModal() {
        this.modalController.dismiss();
    }

    selectUser(user: User): void {
        this.modalController.dismiss(user);
    }

    selectGroup(group: Group): void {
      this.modalController.dismiss(group);
    }


}
