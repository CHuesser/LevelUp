import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodsearchPage } from './foodsearch.page';

describe('FoodsearchPage', () => {
  let component: FoodsearchPage;
  let fixture: ComponentFixture<FoodsearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodsearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodsearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
