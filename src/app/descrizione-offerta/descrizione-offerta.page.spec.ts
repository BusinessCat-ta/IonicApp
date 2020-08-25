import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DescrizioneOffertaPage } from './descrizione-offerta.page';

describe('DescrizioneOffertaPage', () => {
  let component: DescrizioneOffertaPage;
  let fixture: ComponentFixture<DescrizioneOffertaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescrizioneOffertaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DescrizioneOffertaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
