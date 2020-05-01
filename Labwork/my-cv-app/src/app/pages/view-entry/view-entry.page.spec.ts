/* Tuukka Tihekari 1800576, 01.05.2020 */

/* This if for another iteration of this app */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ViewEntryPage } from './view-entry.page';

describe('ViewEntryPage', () => {
  let component: ViewEntryPage;
  let fixture: ComponentFixture<ViewEntryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewEntryPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewEntryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
