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
  private filteredTips: Tip[];
  private filterArgs: number[];

  ngOnInit() {
  }

  constructor( private tipServiceProvider: TipServiceProvider) {
    this.tipServiceProvider.getTips().then((tips => {
      this.tips = tips;
      this.filteredTips = tips;
    }));
    this.filterArgs = [0, 1, 2, 3];
  }
  removeAddFilter(filter: number) {
    const index = this.filterArgs.indexOf(filter);

    if (index !== -1) {
      this.filterArgs.splice(index, 1);
      document.getElementById('tipFilter_' + filter).setAttribute('color', 'medium');
    } else {
      this.filterArgs.push(filter);
      document.getElementById('tipFilter_' + filter).removeAttribute('color');

    }
    console.log(this.filterArgs);
    console.log(this.tips);

    this.filteredTips = this.tips.filter(item => this.filterArgs.indexOf(item.category) !== -1);
    console.log(this.filteredTips);
  }
}
