import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'challenges',
        loadChildren: () => import('../challenges/challenges.module').then(m => m.ChallengesPageModule)
      },
      {
        path: 'tips',
        loadChildren: () => import('../tips/tips.module').then(m => m.TipsPageModule)
      },
      {
        path: 'community',
        loadChildren: () => import('../community/community.module').then(m => m.CommunityPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: 'challenge-detail/:id',
        loadChildren: () => import('../challenge-detail/challenge-detail.module').then( m => m.ChallengeDetailPageModule)
      },
      {
        path: 'home-active-challenge',
        loadChildren: () => import('../home-active-challenge/home-active-challenge.module').then(m => m.HomeActiveChallengePageModule)
      },
      {
        path: 'foodsearch/:id',
        loadChildren: () => import('../foodsearch/foodsearch.module').then(m => m.FoodsearchPageModule)
      },
      {
        path: 'home-trackfood',
        loadChildren: () => import('../home-trackfood/home-trackfood.module').then(m => m.HomeTrackfoodPageModule)
      },

      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
