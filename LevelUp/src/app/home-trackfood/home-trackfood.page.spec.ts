import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeTrackfoodPage } from './home-trackfood.page';

describe('HomeTrackfoodPage', () => {
  let component: HomeTrackfoodPage;
  let fixture: ComponentFixture<HomeTrackfoodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTrackfoodPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeTrackfoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
