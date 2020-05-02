/* Tuukka Tihekari 1800576 01.05.2020 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PersonalProjectsPage } from './personal-projects.page';

describe('PersonalProjectsPage', () => {
  let component: PersonalProjectsPage;
  let fixture: ComponentFixture<PersonalProjectsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalProjectsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalProjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
