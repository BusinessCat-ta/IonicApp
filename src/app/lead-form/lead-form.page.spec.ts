import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeadFormPage } from './lead-form.page';

describe('LeadFormPage', () => {
  let component: LeadFormPage;
  let fixture: ComponentFixture<LeadFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeadFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
