import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EuSouPage } from './euSou.page';

describe('EuSouPage', () => {
  let component: EuSouPage;
  let fixture: ComponentFixture<EuSouPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuSouPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EuSouPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
