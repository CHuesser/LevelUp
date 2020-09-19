import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeSleepanalysisPage } from './home-sleepanalysis.page';

describe('HomeSleepanalysisPage', () => {
  let component: HomeSleepanalysisPage;
  let fixture: ComponentFixture<HomeSleepanalysisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSleepanalysisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeSleepanalysisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
