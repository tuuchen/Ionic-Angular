import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewSongPage } from './view-song.page';

describe('ViewSongPage', () => {
  let component: ViewSongPage;
  let fixture: ComponentFixture<ViewSongPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSongPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewSongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
