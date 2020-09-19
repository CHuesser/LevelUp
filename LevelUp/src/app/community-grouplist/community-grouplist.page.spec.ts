import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommunityGrouplistPage } from './community-grouplist.page';

describe('CommunityGrouplistPage', () => {
  let component: CommunityGrouplistPage;
  let fixture: ComponentFixture<CommunityGrouplistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityGrouplistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommunityGrouplistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
