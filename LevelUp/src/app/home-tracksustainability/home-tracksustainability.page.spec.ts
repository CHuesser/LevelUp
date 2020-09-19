import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeTracksustainabilityPage } from './home-tracksustainability.page';

describe('HomeTracksustainabilityPage', () => {
  let component: HomeTracksustainabilityPage;
  let fixture: ComponentFixture<HomeTracksustainabilityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTracksustainabilityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeTracksustainabilityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
