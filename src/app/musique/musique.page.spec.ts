import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MusiquePage } from './musique.page';

describe('MusiquePage', () => {
  let component: MusiquePage;
  let fixture: ComponentFixture<MusiquePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusiquePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MusiquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
