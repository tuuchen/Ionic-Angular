/* Tuukka Tihekari 1800576 01.05.2020 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SoftSkillsPage } from './soft-skills.page';

describe('SoftSkillsPage', () => {
  let component: SoftSkillsPage;
  let fixture: ComponentFixture<SoftSkillsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftSkillsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SoftSkillsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
