import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FornitoriPage } from './fornitori.page';

describe('FornitoriPage', () => {
  let component: FornitoriPage;
  let fixture: ComponentFixture<FornitoriPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FornitoriPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FornitoriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
