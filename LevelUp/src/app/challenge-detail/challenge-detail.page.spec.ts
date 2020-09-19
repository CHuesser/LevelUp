import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChallengeDetailPage } from './challenge-detail.page';

describe('ChallengeDetailPage', () => {
  let component: ChallengeDetailPage;
  let fixture: ComponentFixture<ChallengeDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChallengeDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
