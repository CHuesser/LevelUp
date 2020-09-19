import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'challenges',
    loadChildren: () => import('./challenges/challenges.module').then( m => m.ChallengesPageModule)
  },
  {
    path: 'tips',
    loadChildren: () => import('./tips/tips.module').then( m => m.TipsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'community',
    loadChildren: () => import('./community/community.module').then(m => m.CommunityPageModule)
  },
  {
    path: 'community-userlist/:meid',
    loadChildren: () => import('./community-userlist/community-userlist.module').then( m => m.CommunityUserlistPageModule)
  },
  {
    path: 'challenge-detail/:id',
    loadChildren: () => import('./challenge-detail/challenge-detail.module').then( m => m.ChallengeDetailPageModule)
  },
  {
    path: 'modal-page',
    loadChildren: () => import('./modal-page/modal-page.module').then( m => m.ModalPagePageModule)
  },
  {
    path: 'home-trackfood',
    loadChildren: () => import('./home-trackfood/home-trackfood.module').then( m => m.HomeTrackfoodPageModule)
  },
  {
    path: 'home-active-challenge',
    loadChildren: () => import('./home-active-challenge/home-active-challenge.module').then( m => m.HomeActiveChallengePageModule)
  },
  {
    path: 'home-trackexercise',
    loadChildren: () => import('./home-trackexercise/home-trackexercise.module').then( m => m.HomeTrackexercisePageModule)
  },
  {
    path: 'home-heartrate',
    loadChildren: () => import('./home-heartrate/home-heartrate.module').then( m => m.HomeHeartratePageModule)
  },
  {
    path: 'home-sleepanalysis',
    loadChildren: () => import('./home-sleepanalysis/home-sleepanalysis.module').then( m => m.HomeSleepanalysisPageModule)
  },
  {
    path: 'community-grouplist/:meid',
    loadChildren: () => import('./community-grouplist/community-grouplist.module').then( m => m.CommunityGrouplistPageModule)
  },
  {
    path: 'community-creategroup',
    loadChildren: () => import('./community-creategroup/community-creategroup.module').then( m => m.CommunityCreategroupPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
