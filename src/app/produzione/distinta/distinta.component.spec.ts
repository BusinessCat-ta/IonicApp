import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DistintaComponent } from './distinta.component';

describe('DistintaComponent', () => {
  let component: DistintaComponent;
  let fixture: ComponentFixture<DistintaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistintaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DistintaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
