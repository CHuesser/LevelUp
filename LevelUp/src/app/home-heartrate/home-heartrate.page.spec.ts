import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeHeartratePage } from './home-heartrate.page';

describe('HomeHeartratePage', () => {
  let component: HomeHeartratePage;
  let fixture: ComponentFixture<HomeHeartratePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeHeartratePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeHeartratePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
