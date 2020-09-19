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
  private buttonColors: string[];

  ngOnInit() {
  }

  constructor( private tipServiceProvider: TipServiceProvider) {
    this.tipServiceProvider.getTips().then((tips => {
      this.tips = tips;
      this.filteredTips = tips;
    }));
    this.filterArgs = [0, 1, 2, 3];
    this.buttonColors = ['danger', 'success', 'warning', 'tertiary'];
  }
  removeAddFilter(filter: number) {
    const index = this.filterArgs.indexOf(filter);

    if (index !== -1) {
      this.filterArgs.splice(index, 1);
      document.getElementById('tipFilter_' + filter).classList.add('deactivated-filter');
    } else {
      this.filterArgs.push(filter);
      document.getElementById('tipFilter_' + filter).classList.remove('deactivated-filter');

    }
    this.filteredTips = this.tips.filter(item => this.filterArgs.some(item2 => item.category.includes(item2)));
  }


}
