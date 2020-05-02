/* Tuukka Tihekari 1800576 01.05.2020 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { GuestbookPage } from './guestbook.page';

describe('GuestbookPage', () => {
  let component: GuestbookPage;
  let fixture: ComponentFixture<GuestbookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestbookPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuestbookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
