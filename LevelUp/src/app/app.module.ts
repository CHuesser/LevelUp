import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {BearStateServiceProvider} from './providers/bearState-service/bearState-service';
import {ChallengeServiceProvider} from './providers/challenge-service/challenge-service';
import {TipServiceProvider} from './providers/tip-service/tip-service';
import {UserServiceProvider} from './providers/user-service/user-service';
import {GroupServiceProvider} from './providers/group-service/group-service';
import {ScoreServiceProvider} from './providers/score-service/score-service';
import {StoredFoodServiceProvider} from './providers/stored-food-service/stored-food-service';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    ChallengeServiceProvider,
    TipServiceProvider,
    UserServiceProvider,
    GroupServiceProvider,
    BearStateServiceProvider,
    StoredFoodServiceProvider,
    ScoreServiceProvider,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]

})
export class AppModule {
}
