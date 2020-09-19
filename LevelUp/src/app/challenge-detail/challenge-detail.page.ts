import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ChallengeServiceProvider} from '../providers/challenge-service/challenge-service';
import {Challenge} from '../models/Challenge';
import {UserServiceProvider} from '../providers/user-service/user-service';
import {User} from '../models/user';
import {Group} from '../models/group';
import {GroupServiceProvider} from '../providers/group-service/group-service';
import {ModalController} from '@ionic/angular';
import {ModalPagePage} from '../modal-page/modal-page.page';

@Component({
    selector: 'app-challenge-detail',
    templateUrl: './challenge-detail.page.html',
    styleUrls: ['./challenge-detail.page.scss'],
})
export class ChallengeDetailPage implements OnInit {
    private me: User;
    private friends: User[];
    private participants: User[];
    private groups: Group[];
    private participantGroup: Group[];
    private challengeId = null;
    private challengeDetail: Challenge;

    // tslint:disable-next-line:max-line-length
    constructor(private activatedRoute: ActivatedRoute, private challengeServiceProvider: ChallengeServiceProvider, private userServiceProvider: UserServiceProvider, private groupServiceProvider: GroupServiceProvider, public modalCtrl: ModalController) {
        this.userServiceProvider.getUser(0)
            .then(me => this.me = me)
            .then(_ => this.userServiceProvider.getFriends(this.me)
                .then(users => this.friends = users))
            .then(_ => this.groupServiceProvider.getGroupsToUser(this.me)
                .then(groups => this.groups = groups)).then(_ => {
                this.participants = [];
                this.participantGroup = [];
            }
        );
    }

    ngOnInit() {
        this.challengeId = this.activatedRoute.snapshot.paramMap.get('id');
        this.challengeServiceProvider.getChallenges().then((challenges => {
            this.challengeDetail = challenges.filter(challenge => challenge.id == this.challengeId)[0];
            console.log(this.challengeDetail);
        }));
    }

    async openModal() {
        let modalPage = await this.modalCtrl.create({
            component: ModalPagePage,
            componentProps: {friends: this.friends, groups: this.groups}
        });

        modalPage.onDidDismiss()
            .then((data) => {
                const user = data['data']; // Here's your selected user!
                if (user.level) {
                    if (this.participants.indexOf(user) === -1) {
                        this.participants.push(user);
                    }

                } else {
                    if (this.participantGroup.indexOf(user) === -1) {
                        this.participantGroup.push(user);
                    }
                }
            });

        return await modalPage.present();
    }

}
