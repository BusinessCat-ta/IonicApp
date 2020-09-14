import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProduzionePage } from './produzione.page';

describe('ProduzionePage', () => {
  let component: ProduzionePage;
  let fixture: ComponentFixture<ProduzionePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduzionePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProduzionePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
