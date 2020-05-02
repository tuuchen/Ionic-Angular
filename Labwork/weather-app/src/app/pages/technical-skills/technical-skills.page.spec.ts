/* Tuukka Tihekari 1800576 01.05.2020 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { TechnicalSkillsPage } from './technical-skills.page';

describe('TechnicalSkillsPage', () => {
  let component: TechnicalSkillsPage;
  let fixture: ComponentFixture<TechnicalSkillsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalSkillsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TechnicalSkillsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
