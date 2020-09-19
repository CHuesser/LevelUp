import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodsearchresultPage } from './foodsearchresult.page';

describe('FoodsearchresultPage', () => {
  let component: FoodsearchresultPage;
  let fixture: ComponentFixture<FoodsearchresultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodsearchresultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodsearchresultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
