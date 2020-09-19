import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommunityCreategroupPage } from './community-creategroup.page';

describe('CommunityCreategroupPage', () => {
  let component: CommunityCreategroupPage;
  let fixture: ComponentFixture<CommunityCreategroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityCreategroupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommunityCreategroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
