import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeActiveChallengePage } from './home-active-challenge.page';

describe('HomeActiveChallengePage', () => {
  let component: HomeActiveChallengePage;
  let fixture: ComponentFixture<HomeActiveChallengePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeActiveChallengePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeActiveChallengePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
