/* Tuukka Tihekari 1800576 01.05.2020 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { TeamProjectsPage } from './team-projects.page';

describe('TeamProjectsPage', () => {
  let component: TeamProjectsPage;
  let fixture: ComponentFixture<TeamProjectsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamProjectsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeamProjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
