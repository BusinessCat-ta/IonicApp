import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InterventiPagePage } from './interventi-page.page';

describe('InterventiPagePage', () => {
  let component: InterventiPagePage;
  let fixture: ComponentFixture<InterventiPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterventiPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InterventiPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
