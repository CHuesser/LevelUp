import { Component, OnInit } from '@angular/core';
import { Tip } from '../models/Tip';
import {TipServiceProvider} from '../providers/tip-service/tip-service';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.page.html',
  styleUrls: ['./tips.page.scss'],
})
export class TipsPage implements OnInit {
  private tips: Tip[];

  ngOnInit() {
  }

  constructor( private tipServiceProvider: TipServiceProvider) {
    this.tipServiceProvider.getTips().then((tips => this.tips = tips));
  }

}
