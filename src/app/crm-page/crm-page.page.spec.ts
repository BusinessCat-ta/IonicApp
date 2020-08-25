import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrmPagePage } from './crm-page.page';

describe('CrmPagePage', () => {
  let component: CrmPagePage;
  let fixture: ComponentFixture<CrmPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrmPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
