import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeTrackexercisePage } from './home-trackexercise.page';

describe('HomeTrackexercisePage', () => {
  let component: HomeTrackexercisePage;
  let fixture: ComponentFixture<HomeTrackexercisePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTrackexercisePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeTrackexercisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
