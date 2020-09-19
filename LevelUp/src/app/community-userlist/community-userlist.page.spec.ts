import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommunityUserlistPage } from './community-userlist.page';

describe('UserlistPage', () => {
  let component: CommunityUserlistPage;
  let fixture: ComponentFixture<CommunityUserlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityUserlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommunityUserlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
