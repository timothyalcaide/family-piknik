import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LineUpPage } from './line-up.page';

describe('LineUpPage', () => {
  let component: LineUpPage;
  let fixture: ComponentFixture<LineUpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineUpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LineUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
